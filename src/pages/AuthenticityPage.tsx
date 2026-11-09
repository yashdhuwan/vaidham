import React, { useState } from 'react';
import { Search, ShieldCheck, CheckCircle2, AlertTriangle, FileText, ArrowRight, RefreshCw, QrCode } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const AuthenticityPage: React.FC = () => {
  const { navigateToProduct } = useCart();
  const [batchInput, setBatchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [searched, setSearched] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleVerify = async (codeToVerify?: string) => {
    const code = (codeToVerify || batchInput).trim();
    if (!code) return;

    setLoading(true);
    setErrorMsg(null);
    setSearched(true);
    setResult(null);

    try {
      const res = await fetch(`/api/verify-batch/${encodeURIComponent(code)}`);
      const data = await res.json();
      if (res.ok && data.verified) {
        setResult(data.batch);
      } else {
        setErrorMsg(data.message || 'No registered batch matched this identifier.');
      }
    } catch {
      setErrorMsg('Unable to contact verification service. Please reach the Vaidham Wellness Desk at +91 9416367044.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 space-y-16">
      {/* Editorial Header */}
      <div className="border-b border-[#173D32]/15 pb-8 space-y-3 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#B79A69]">
          <span>Public Laboratory Dossier</span>
          <span>·</span>
          <span>NABL Accreditation #TC-8192</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-black text-[#173D32] tracking-tight">
          Don't Just Trust. Verify.
        </h1>
        <p className="text-sm sm:text-base text-[#1F2420]/80 font-light leading-relaxed font-serif">
          Every Vaidham bottle is stamped with an authenticated batch code. Enter your code below to directly review laboratory testing parameters, active phytocompound assays, and manufacturing compliance certificates.
        </p>
      </div>

      {/* Verification Search Console */}
      <div className="bg-white p-8 sm:p-10 border border-[#173D32]/20 shadow-xs max-w-3xl space-y-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleVerify();
          }}
          className="space-y-4"
        >
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#173D32]">
            Enter Batch Number (e.g. AR-2024-08, LV-2024-09)
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-[#173D32]/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={batchInput}
                onChange={(e) => setBatchInput(e.target.value.toUpperCase())}
                placeholder="e.g. AR-2024-08 or LV-2024-09"
                className="w-full bg-[#F7F4EC] border border-[#173D32]/20 rounded-xs pl-12 pr-4 py-3.5 text-sm font-mono font-semibold text-[#173D32] placeholder-[#173D32]/40 focus:outline-hidden focus:border-[#173D32]"
              />
            </div>
            <button
              type="submit"
              disabled={loading || !batchInput.trim()}
              className="px-8 py-3.5 bg-[#173D32] hover:bg-[#0B221B] text-[#F7F4EC] rounded-xs text-xs font-bold uppercase tracking-[0.16em] transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 shrink-0 btn-handcrafted shadow-xs"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-[#B79A69]" />
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4 text-[#B79A69]" />
                  <span>Verify Batch</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Quick Sample Clickers */}
        <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="text-[11px] uppercase tracking-wider font-bold text-[#B79A69]">
            Sample Live Batches:
          </span>
          {['AR-2024-08', 'LV-2024-09', 'AR-2024-11'].map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => {
                setBatchInput(code);
                handleVerify(code);
              }}
              className="px-3 py-1 bg-[#EAE3D6] hover:bg-[#D8CEBC] text-[#173D32] font-mono font-semibold rounded-xs text-xs transition-colors cursor-pointer border border-[#173D32]/10"
            >
              № {code}
            </button>
          ))}
        </div>
      </div>

      {/* VERIFICATION RESULTS CONTAINER */}
      {searched && (
        <div className="max-w-4xl space-y-6 animate-in fade-in duration-300">
          {result ? (
            /* VERIFIED SUCCESS STATE */
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-emerald-700/30 shadow-md space-y-8">
              {/* Header Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#242A26]/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-7 h-7 text-emerald-700" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-800 font-bold block">
                      Authenticity Status: VERIFIED & ACCREDITED
                    </span>
                    <h2 className="font-serif text-3xl font-semibold text-[#173D32]">
                      {result.productName}
                    </h2>
                  </div>
                </div>

                <div className="text-right text-xs text-[#242A26]/70">
                  <span className="text-[10px] block uppercase font-mono text-[#B79A69]">
                    Manufacturing Batch
                  </span>
                  <span className="font-mono text-lg font-bold text-[#173D32]">
                    {result.batchNumber}
                  </span>
                </div>
              </div>

              {/* Manufacturing & Regulatory Details */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div className="bg-[#F7F4EC] p-4 rounded-xl border border-[#242A26]/5">
                  <span className="text-[#242A26]/60 block text-[11px]">Mfg Date</span>
                  <span className="font-semibold text-[#173D32]">{result.mfgDate}</span>
                </div>
                <div className="bg-[#F7F4EC] p-4 rounded-xl border border-[#242A26]/5">
                  <span className="text-[#242A26]/60 block text-[11px]">Expiry Date</span>
                  <span className="font-semibold text-[#173D32]">{result.expDate}</span>
                </div>
                <div className="bg-[#F7F4EC] p-4 rounded-xl border border-[#242A26]/5">
                  <span className="text-[#242A26]/60 block text-[11px]">Pack Size</span>
                  <span className="font-semibold text-[#173D32]">{result.packSize}</span>
                </div>
                <div className="bg-[#F7F4EC] p-4 rounded-xl border border-[#242A26]/5">
                  <span className="text-[#242A26]/60 block text-[11px]">GTIN Code</span>
                  <span className="font-mono font-semibold text-[#173D32]">{result.gtin}</span>
                </div>
              </div>

              {/* Lab Testing Certificates of Analysis (COA) */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#173D32]">
                      Laboratory Certificate of Analysis (COA)
                    </h3>
                    <p className="text-xs text-[#242A26]/60">
                      {result.labTesting.accreditation} · Tested on {result.labTesting.testedOn}
                    </p>
                  </div>
                </div>

                {/* Heavy Metals Table */}
                <div className="bg-[#F7F4EC] rounded-2xl p-6 border border-[#242A26]/10 space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#173D32] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>Heavy Metals Screening (Inductively Coupled Plasma Mass Spectrometry - ICP-MS)</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="bg-white p-3 rounded-lg border border-[#242A26]/5 flex justify-between">
                      <span className="text-[#242A26]/70">Lead (Pb)</span>
                      <span className="font-semibold text-emerald-800">{result.labTesting.heavyMetals.lead}</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-[#242A26]/5 flex justify-between">
                      <span className="text-[#242A26]/70">Arsenic (As)</span>
                      <span className="font-semibold text-emerald-800">{result.labTesting.heavyMetals.arsenic}</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-[#242A26]/5 flex justify-between">
                      <span className="text-[#242A26]/70">Mercury (Hg)</span>
                      <span className="font-semibold text-emerald-800">{result.labTesting.heavyMetals.mercury}</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-[#242A26]/5 flex justify-between">
                      <span className="text-[#242A26]/70">Cadmium (Cd)</span>
                      <span className="font-semibold text-emerald-800">{result.labTesting.heavyMetals.cadmium}</span>
                    </div>
                  </div>
                </div>

                {/* Active Standardization Assays */}
                <div className="bg-[#F7F4EC] rounded-2xl p-6 border border-[#242A26]/10 space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#173D32]">
                    Active Phytochemical Potency Assay (HPLC)
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {Object.entries(result.labTesting.activeAssay).map(([key, val]) => (
                      <div key={key} className="bg-white p-3 rounded-lg border border-[#242A26]/5 flex justify-between">
                        <span className="capitalize text-[#242A26]/70">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="font-semibold text-[#173D32]">{String(val)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Manufacturing Plant Details */}
              <div className="bg-[#EAE3D6] p-5 rounded-xl border border-[#242A26]/10 text-xs space-y-1">
                <span className="font-semibold text-[#173D32] block">
                  {result.manufacturing.facility}
                </span>
                <p className="text-[#242A26]/70">
                  Ayush GMP License: {result.manufacturing.licenseNumber} · Location: {result.manufacturing.location}
                </p>
              </div>
            </div>
          ) : (
            /* HONEST NOT FOUND STATE */
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-amber-600/30 shadow-xs space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-6 h-6 text-amber-700" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-semibold text-[#173D32]">
                    Unregistered or Unmatched Batch Code
                  </h3>
                  <p className="text-xs sm:text-sm text-[#242A26]/80 leading-relaxed font-light">
                    {errorMsg}
                  </p>
                </div>
              </div>

              <div className="bg-[#F7F4EC] p-5 rounded-2xl border border-[#242A26]/10 text-xs space-y-2">
                <span className="font-semibold text-[#173D32] block">
                  How to locate your correct batch identifier:
                </span>
                <ul className="space-y-1 list-disc list-inside text-[#242A26]/70">
                  <li>Inspect the side or bottom panel of your Vaidham product carton.</li>
                  <li>Locate the printed alphanumeric sequence following "B.No:" or "Batch:".</li>
                  <li>Example format: <code>AR-2024-08</code> or <code>LV-2024-09</code>.</li>
                </ul>
              </div>

              <div className="pt-2 flex items-center gap-4 text-xs">
                <a
                  href="https://wa.me/919416367044?text=Hello%20Vaidham,%20I%20would%20like%20to%20verify%20my%20product%20batch."
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-[#173D32] text-[#F7F4EC] rounded-lg font-semibold hover:bg-[#0F2A22] transition-colors"
                >
                  Contact Wellness Desk (+91 9416367044)
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
