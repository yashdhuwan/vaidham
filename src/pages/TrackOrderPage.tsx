import React, { useState } from 'react';
import { Search, PackageCheck, Truck, CheckCircle2, MapPin, Clock, PhoneCall, AlertCircle } from 'lucide-react';

export const TrackOrderPage: React.FC = () => {
  const [orderQuery, setOrderQuery] = useState('');
  const [orderResult, setOrderResult] = useState<any | null>(null);
  const [searched, setSearched] = useState(false);

  const handleTrack = (e?: React.FormEvent, customId?: string) => {
    if (e) e.preventDefault();
    const query = (customId || orderQuery).trim().toUpperCase();
    if (!query) return;

    setSearched(true);

    // Check localStorage history first
    try {
      const history = JSON.parse(localStorage.getItem('vaidham_orders') || '[]');
      const found = history.find((o: any) => o.orderId.toUpperCase() === query);
      if (found) {
        setOrderResult({
          orderId: found.orderId,
          customerName: found.customerName,
          status: 'DISPATCHED_IN_TRANSIT',
          currentMilestone: 3,
          carrier: 'BlueDart Express',
          awb: '81920412891',
          estimatedDelivery: 'Tomorrow by 06:00 PM',
          destination: found.address,
          batchesIncluded: found.items.map((i: any) => `${i.product.name} (${i.product.activeBatch})`).join(', '),
          history: [
            { time: '10:14 AM Today', text: 'Arrived at Regional Delivery Sorting Center' },
            { time: '04:30 AM Today', text: 'In transit from Central Transit Hub' },
            { time: '07:15 PM Yesterday', text: 'Dispatched from Vaidham Cleanroom Facility, Gurugram' },
            { time: '02:00 PM Yesterday', text: 'Order confirmed and verified batch documentation packed' },
          ],
        });
        return;
      }
    } catch (err) {
      console.warn(err);
    }

    // Default authentic simulation for demo queries
    setOrderResult({
      orderId: query,
      customerName: 'Verified Vaidham Patron',
      status: 'DISPATCHED_IN_TRANSIT',
      currentMilestone: 3,
      carrier: 'BlueDart Express Air Priority',
      awb: 'BLU-819241029',
      estimatedDelivery: 'Within 1-2 Business Days',
      destination: 'Gurugram / Delhi NCR Transit Sector',
      batchesIncluded: 'ArthReliv (Batch: AR-2024-08)',
      history: [
        { time: '09:30 AM Today', text: 'Shipment received at regional distribution gateway' },
        { time: '06:00 AM Today', text: 'Departed Gurugram Sorting Facility' },
        { time: '08:45 PM Yesterday', text: 'Quality checked, sealed, and manifest generated' },
        { time: '04:10 PM Yesterday', text: 'Order authenticated by Vaidham Dispensary' },
      ],
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="border-b border-[#242A26]/10 pb-8 space-y-3 max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#B79A69]">
          Logistics Transparency
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#173D32]">
          Track Your Vaidham Order
        </h1>
        <p className="text-sm sm:text-base text-[#242A26]/80 font-light leading-relaxed">
          Enter your Vaidham Order ID (e.g. VDH-ORD-10924) or AWB Tracking Number to check real-time cleanroom packaging, dispatch confirmation, and carrier transit progress.
        </p>
      </div>

      {/* Search Input Box */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#242A26]/10 shadow-xs max-w-2xl space-y-4">
        <form onSubmit={handleTrack} className="space-y-3">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#173D32]">
            Enter Order Reference or AWB Number
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-[#242A26]/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={orderQuery}
                onChange={(e) => setOrderQuery(e.target.value.toUpperCase())}
                placeholder="e.g. VDH-ORD-84920"
                className="w-full bg-[#F7F4EC] border border-[#242A26]/20 rounded-xl pl-12 pr-4 py-3 text-xs sm:text-sm font-mono text-[#173D32] placeholder-[#242A26]/40 focus:outline-hidden focus:border-[#173D32]"
              />
            </div>
            <button
              type="submit"
              disabled={!orderQuery.trim()}
              className="px-8 py-3 bg-[#173D32] hover:bg-[#0F2A22] text-[#F7F4EC] rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors disabled:opacity-50 cursor-pointer shrink-0"
            >
              Track Order
            </button>
          </div>
        </form>

        <div className="pt-2 flex items-center gap-2 text-xs text-[#242A26]/60">
          <span>Demo Tracking Reference:</span>
          <button
            type="button"
            onClick={() => {
              setOrderQuery('VDH-ORD-84920');
              handleTrack(undefined, 'VDH-ORD-84920');
            }}
            className="font-mono underline text-[#173D32] font-semibold cursor-pointer"
          >
            VDH-ORD-84920
          </button>
        </div>
      </div>

      {/* TRACKING DETAILS CONTAINER */}
      {searched && orderResult && (
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#242A26]/10 shadow-md max-w-4xl space-y-8 animate-in fade-in">
          {/* Milestone Stepper */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#242A26]/10">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B79A69] block">
                Order Status
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#173D32]">
                In Transit — Priority Delivery
              </h2>
              <p className="text-xs text-[#242A26]/70 mt-1">
                Carrier: {orderResult.carrier} · AWB: <span className="font-mono">{orderResult.awb}</span>
              </p>
            </div>

            <div className="bg-[#EAE3D6] px-4 py-2 rounded-xl text-right">
              <span className="text-[10px] uppercase font-mono block text-[#242A26]/60">
                Estimated Delivery
              </span>
              <span className="font-serif text-lg font-bold text-[#173D32]">
                {orderResult.estimatedDelivery}
              </span>
            </div>
          </div>

          {/* Stepper Visual */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
            <div className="bg-[#F7F4EC] p-4 rounded-xl border border-emerald-700/20 space-y-1">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>1. Confirmed</span>
              </div>
              <p className="text-[11px] text-[#242A26]/60">Batch reserved</p>
            </div>

            <div className="bg-[#F7F4EC] p-4 rounded-xl border border-emerald-700/20 space-y-1">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>2. Quality Sealed</span>
              </div>
              <p className="text-[11px] text-[#242A26]/60">Gurugram facility</p>
            </div>

            <div className="bg-[#173D32] text-[#F7F4EC] p-4 rounded-xl space-y-1 shadow-xs">
              <div className="flex items-center gap-2 font-semibold text-[#B79A69]">
                <Truck className="w-4 h-4 text-[#B79A69]" />
                <span>3. In Transit</span>
              </div>
              <p className="text-[11px] text-[#A8B49B]">On carrier route</p>
            </div>

            <div className="bg-[#F7F4EC] p-4 rounded-xl border border-[#242A26]/10 opacity-60 space-y-1">
              <div className="flex items-center gap-2 font-semibold text-[#242A26]">
                <PackageCheck className="w-4 h-4" />
                <span>4. Out for Delivery</span>
              </div>
              <p className="text-[11px] text-[#242A26]/60">Doorstep delivery</p>
            </div>
          </div>

          {/* Timeline checkpoints */}
          <div className="space-y-3 pt-2">
            <h3 className="font-serif text-lg font-semibold text-[#173D32]">
              Transit Event Log
            </h3>
            <div className="space-y-3 border-l-2 border-[#173D32]/20 pl-4 text-xs">
              {orderResult.history.map((ev: any, i: number) => (
                <div key={i} className="relative space-y-0.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#173D32] absolute -left-[21px] top-1" />
                  <span className="font-mono text-[#B79A69] text-[11px] font-semibold">{ev.time}</span>
                  <p className="text-[#242A26]/80">{ev.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Need assistance */}
          <div className="pt-4 border-t border-[#242A26]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <span className="text-[#242A26]/70">
              Need to alter delivery address or instruct delivery courier?
            </span>
            <a
              href="tel:+919416367044"
              className="text-[#173D32] font-semibold underline hover:text-[#B79A69] flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Call Wellness Desk: +91 9416367044
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
