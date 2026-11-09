import React, { useState } from 'react';
import { Truck, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

export const PincodeChecker: React.FC = () => {
  const [pincode, setPincode] = useState('');
  const [result, setResult] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(pincode.trim())) {
      setError('Please enter a valid 6-digit Indian PIN code.');
      setResult(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/check-pincode/${pincode.trim()}`);
      const data = await res.json();
      if (res.ok) {
        setResult(data);
      } else {
        setError(data.message || 'Serviceability check failed.');
      }
    } catch {
      // Client-side fallback if server is unreachable
      setResult({
        serviceable: true,
        pincode: pincode.trim(),
        region: 'Pan-India Delivery Hub',
        estimatedDelivery: '2 - 4 Business Days',
        codAvailable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#EAE3D6]/70 rounded-xl p-4 border border-[#242A26]/10">
      <div className="flex items-center gap-2 text-xs font-semibold text-[#173D32] mb-2 uppercase tracking-wider">
        <Truck className="w-4 h-4 text-[#B79A69]" />
        <span>Check Delivery & Pincode Serviceability</span>
      </div>

      <form onSubmit={handleCheck} className="flex gap-2">
        <input
          type="text"
          maxLength={6}
          value={pincode}
          onChange={(e) => {
            setPincode(e.target.value.replace(/\D/g, ''));
            setError(null);
          }}
          placeholder="Enter 6-digit PIN (e.g. 122017, 110001)"
          className="bg-white border border-[#242A26]/20 rounded-lg px-3 py-1.5 text-xs text-[#242A26] placeholder-[#242A26]/40 focus:outline-hidden focus:border-[#173D32] flex-1 tabular-nums"
        />
        <button
          type="submit"
          disabled={loading || pincode.length !== 6}
          className="px-4 py-1.5 bg-[#173D32] text-[#F7F4EC] rounded-lg text-xs font-medium hover:bg-[#0F2A22] transition-colors disabled:opacity-50 cursor-pointer flex items-center gap-1 shrink-0"
        >
          <span>{loading ? 'Checking...' : 'Check'}</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </form>

      {error && (
        <div className="mt-2 text-xs text-red-700 flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {result && (
        <div className="mt-3 pt-3 border-t border-[#242A26]/10 text-xs space-y-1 animate-in fade-in">
          <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Delivery Available to {result.pincode} ({result.region})</span>
          </div>
          <div className="text-[#242A26]/80 pl-5 text-[11px] space-y-0.5">
            <p>Estimated dispatch transit: <strong>{result.estimatedDelivery}</strong></p>
            <p>Cash on Delivery (COD): <strong>{result.codAvailable ? 'Available' : 'Prepaid Only'}</strong></p>
            <p>Complimentary Free Shipping: <strong>On all orders ₹999+</strong></p>
          </div>
        </div>
      )}
    </div>
  );
};
