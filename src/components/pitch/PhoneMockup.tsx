import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  className?: string;
  /** scale 1 = 280x568. Use 1.0 ~ 1.2 for slide; 1.4 for hero */
  scale?: number;
}

/**
 * Mockup estático del Mini-Programa WeChat — pantalla VIP Centre.
 * Diseño nativo WeChat con texto en chino simplificado.
 */
export const PhoneMockup = ({ className, scale = 1 }: PhoneMockupProps) => {
  const [trial, setTrial] = useState(false);
  const width = 290 * scale;
  const height = 600 * scale;

  return (
    <div
      className={cn("relative", className)}
      style={{ width, height }}
    >
      {/* Glow halo */}
      <div className="absolute inset-0 rounded-[44px] bg-primary/20 blur-3xl opacity-40" />

      {/* Phone frame */}
      <div
        className="relative h-full w-full rounded-[44px] border-[7px] border-[#2a2a2a] bg-[#0f0f0f] overflow-hidden"
        style={{
          boxShadow:
            "0 0 0 1px #333, 0 40px 80px rgba(0,0,0,0.7), 0 0 60px hsl(var(--primary) / 0.2)",
        }}
      >
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-10 flex h-7 w-[100px] -translate-x-1/2 items-center justify-center gap-1.5 rounded-b-2xl bg-[#111]">
          <div className="h-2 w-2 rounded-full bg-[#222]" />
          <div className="h-1.5 w-10 rounded-full bg-[#1a1a1a]" />
        </div>

        {/* Screen */}
        <div
          className="h-full w-full overflow-y-auto pt-7 no-scrollbar"
          style={{ fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif" }}
        >
          {/* WeChat header */}
          <div className="flex items-center gap-2 bg-primary px-4 py-3">
            <span className="text-base text-white">‹</span>
            <span className="flex-1 text-center text-[15px] font-semibold text-white">
              VIP 会员中心
            </span>
            <span className="text-lg text-white">⋯</span>
          </div>

          {/* Hero */}
          <div
            className="relative overflow-hidden px-4 py-5 text-center"
            style={{
              background:
                "linear-gradient(135deg, #0a2818 0%, #0d3d22 50%, hsl(var(--primary)) 100%)",
            }}
          >
            <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-primary/20" />
            <div className="text-3xl mb-1">👑</div>
            <div className="font-bold text-[15px] text-gold mb-0.5">赛事数据专业版</div>
            <div className="text-[10px] text-white/70 mb-3">由 AI 驱动的专业体育分析</div>

            <motion.button
              onClick={() => setTrial(!trial)}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "rounded-full px-7 py-2.5 text-[13px] font-bold tracking-wide transition-all",
                trial
                  ? "bg-gradient-to-br from-emerald-500 to-primary text-white shadow-[0_4px_20px_hsl(var(--primary)/0.4)]"
                  : "bg-gradient-to-br from-gold to-orange-500 text-[#1a1a1a] shadow-[0_4px_20px_hsl(var(--gold)/0.5)]",
              )}
            >
              {trial ? "✓ 已激活试用" : "7天免费试用"}
            </motion.button>
            {trial && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1.5 text-[10px] text-emerald-400"
              >
                ✓ 试用已成功激活！
              </motion.div>
            )}
          </div>

          {/* Plans */}
          <div className="px-3.5 py-3">
            <div className="text-[10px] text-[#888] mb-2.5 text-center">选择您的会员计划</div>

            {/* Plan 1 */}
            <div className="mb-2 rounded-xl bg-white/5 border border-white/10 px-3.5 py-3 flex items-center justify-between">
              <div>
                <div className="text-[12px] font-bold text-slate-200">月度会员</div>
                <div className="text-[9px] text-[#555] mt-0.5">AI 预测 · 高级统计 · 无广告</div>
              </div>
              <div className="text-right">
                <span className="text-[16px] font-extrabold text-slate-200">¥29</span>
                <span className="text-[9px] text-[#555]">/月</span>
              </div>
            </div>

            {/* Plan 2 (highlight) */}
            <div className="mb-2 rounded-xl bg-primary/15 border-[1.5px] border-primary px-3.5 py-3 flex items-center justify-between">
              <div>
                <div className="text-[12px] font-bold text-slate-200 flex items-center">
                  季度会员
                  <span className="ml-1.5 rounded-full bg-primary text-white text-[8px] font-bold px-1.5 py-0.5">
                    最受欢迎
                  </span>
                </div>
                <div className="text-[9px] text-[#555] mt-0.5">AI 预测 · 高级统计 · 无广告</div>
              </div>
              <div className="text-right">
                <span className="text-[16px] font-extrabold text-primary">¥79</span>
                <span className="text-[9px] text-[#555]">/季</span>
              </div>
            </div>

            {/* Plan 3 */}
            <div className="mb-3 rounded-xl bg-white/5 border border-white/10 px-3.5 py-3 flex items-center justify-between">
              <div>
                <div className="text-[12px] font-bold text-slate-200 flex items-center">
                  年度会员
                  <span className="ml-1.5 rounded-full bg-gold text-[#1a1a1a] text-[8px] font-bold px-1.5 py-0.5">
                    省50%
                  </span>
                </div>
                <div className="text-[9px] text-[#555] mt-0.5">AI 预测 · 高级统计 · 无广告</div>
              </div>
              <div className="text-right">
                <span className="text-[16px] font-extrabold text-slate-200">¥199</span>
                <span className="text-[9px] text-[#555]">/年</span>
              </div>
            </div>

            {/* Features */}
            <div className="text-[10px] text-[#888] font-semibold mb-2 mt-3">专业版功能</div>
            {[
              ["🤖", "AI 球员表现预测"],
              ["📊", "实时赛事数据分析"],
              ["🏆", "私人联赛管理工具"],
              ["🎯", "个性化阵容建议"],
            ].map(([icon, label]) => (
              <div key={label} className="flex items-center gap-2 mb-1.5">
                <span className="text-[12px]">{icon}</span>
                <span className="text-[10px] text-slate-400 flex-1">{label}</span>
                <span className="text-[10px] text-primary">✓</span>
              </div>
            ))}

            {/* Bottom nav */}
            <div className="mt-5 pt-3 border-t border-white/5 flex justify-around">
              {[
                ["🏠", "首页", "#555"],
                ["⚽", "联赛", "#555"],
                ["👑", "VIP", "hsl(var(--primary))"],
                ["👤", "我的", "#555"],
              ].map(([icon, label, color]) => (
                <div key={label} className="text-center">
                  <div className="text-[15px]">{icon}</div>
                  <div className="text-[8px] mt-0.5 font-semibold" style={{ color }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
