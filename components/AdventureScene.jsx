"use client";
// components/AdventureScene.jsx — "Cyber Explorer"
import { useEffect, useRef, useState } from "react";

const LINES = [
  "Sistem online. Halo, penjelajah!",
  "Scroll terus buat scan semua proyek.",
  "Compiling ide... 100% selesai.",
  "Kontak ada di node terakhir. Connect yuk!",
  "git commit -m 'siap petualangan'",
];
const GLYPHS = ["0", "1", "{ }", "</>", "01", "AI", "//", "=>", "[ ]", "10"];
const SPARKS = ["0", "1", "<>", "{}", "+"];

export default function AdventureScene() {
  const walker = useRef(null);
  const [line, setLine] = useState("");
  const [jump, setJump] = useState(false);
  const [lift, setLift] = useState(false);
  const [glyphs, setGlyphs] = useState([]);
  const [burst, setBurst] = useState([]);
  const [hint, setHint] = useState(true);

  useEffect(() => {
    setGlyphs(
      Array.from({ length: 26 }, (_, i) => ({
        id: i,
        g: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
        x: Math.random() * 100,
        s: 11 + Math.random() * 8,
        t: 9 + Math.random() * 10,
        d: -Math.random() * 18,
      }))
    );
  }, []);

  useEffect(() => {
    const el = walker.current;
    if (!el) return;
    let last = window.scrollY;
    let timer;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      el.style.transform = `translateX(${p * (window.innerWidth - el.offsetWidth - 8) + 4}px)`;
      el.classList.add("walking");
      el.classList.toggle("face-left", window.scrollY < last);
      if (window.scrollY > 40) setHint(false);
      last = window.scrollY;
      clearTimeout(timer);
      timer = setTimeout(() => el.classList.remove("walking"), 160);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target?.tagName)) return;
      const k = e.key.toLowerCase();
      const step = Math.round(window.innerHeight * 0.35);
      if (k === "w" || k === "a") window.scrollBy({ top: -step, behavior: "smooth" });
      if (k === "s" || k === "d") window.scrollBy({ top: step, behavior: "smooth" });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const talk = () => {
    setJump(true);
    setLine(LINES[Math.floor(Math.random() * LINES.length)]);
    const id = Date.now();
    setBurst(
      Array.from({ length: 14 }, (_, i) => ({
        id: `${id}-${i}`,
        c: SPARKS[i % SPARKS.length],
        dx: `${(Math.random() - 0.5) * 240}px`,
        dy: `${-40 - Math.random() * 160}px`,
      }))
    );
    setTimeout(() => setJump(false), 750);
    setTimeout(() => setLine(""), 3200);
    setTimeout(() => setBurst([]), 1500);
  };

  return (
    <>
      <div className="adv-sky" aria-hidden="true">
        <div className="adv-chip" style={{ left: "3%", top: "46%", width: "190px", "--t": "10s" }}><Chip /></div>
        <div className="adv-chip" style={{ left: "46%", top: "7%", width: "110px", "--t": "8s", "--d": "-3s" }}><Chip small /></div>
        <div className="adv-chip" style={{ right: "14%", top: "62%", width: "150px", "--t": "11s", "--d": "-6s" }}><Chip /></div>

        <div className="packet" style={{ "--y": "24%", "--t": "13s" }} />
        <div className="packet" style={{ "--y": "58%", "--t": "18s", "--d": "-7s", background: "#a3e635" }} />
        <div className="packet" style={{ "--y": "78%", "--t": "22s", "--d": "-14s" }} />

        <div className={`adv-drone ${lift ? "lift" : ""}`} onClick={() => { setLift(true); setTimeout(() => setLift(false), 2400); }}>
          <svg viewBox="0 0 140 80">
            <path d="M42 30l-24-10M98 30l24-10" stroke="#22d3ee" strokeWidth="3" />
            <ellipse className="prop" cx="14" cy="18" rx="16" ry="3.5" fill="#67e8f9" opacity=".8" />
            <ellipse className="prop" cx="126" cy="18" rx="16" ry="3.5" fill="#67e8f9" opacity=".8" />
            <rect x="38" y="28" width="64" height="26" rx="10" fill="#0c1a30" stroke="#22d3ee" strokeWidth="3" />
            <circle cx="70" cy="41" r="8" fill="#22d3ee" /><circle cx="70" cy="41" r="3.5" fill="#04101c" />
            <circle className="led" cx="48" cy="41" r="3" fill="#a3e635" />
            <path d="M58 54l-6 12M82 54l6 12M48 66h14M78 66h14" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <div className="code-rain" aria-hidden="true">
        {glyphs.map((g) => (
          <span key={g.id} className="glyph" style={{ "--x": g.x, "--s": g.s, "--t": `${g.t}s`, "--d": `${g.d}s` }}>{g.g}</span>
        ))}
      </div>

      <div className={`adv-hint ${hint ? "" : "gone"}`}>Scroll atau tekan <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> untuk menjelajah</div>

      <div ref={walker} className={`adv-walker ${jump ? "jump" : ""}`} onClick={talk} role="button" aria-label="Robot penjelajah, klik untuk menyapa">
        <div className={`adv-bubble ${line ? "show" : ""}`}>{line}</div>
        <div className="burst-wrap">
          {burst.map((b) => <i key={b.id} className="burst" style={{ "--dx": b.dx, "--dy": b.dy }}>{b.c}</i>)}
        </div>
        <div className="adv-walker-flip">
          <svg viewBox="0 0 80 112">
            <g className="body-bob">
              <rect x="12" y="46" width="16" height="28" rx="5" fill="#0c1a30" stroke="#22d3ee" strokeWidth="2.5" />{/* baterai */}
              <path d="M16 54h8M16 60h8M16 66h8" stroke="#a3e635" strokeWidth="2" strokeLinecap="round" />
              <g className="leg leg-a"><rect x="33" y="76" width="12" height="26" rx="4" fill="#12233f" stroke="#22d3ee" strokeWidth="2" /><rect x="30" y="100" width="20" height="8" rx="4" fill="#22d3ee" /></g>
              <g className="leg leg-b"><rect x="45" y="76" width="12" height="26" rx="4" fill="#0e1c34" stroke="#22d3ee" strokeWidth="2" /><rect x="42" y="100" width="20" height="8" rx="4" fill="#67e8f9" /></g>
              <rect x="26" y="42" width="34" height="38" rx="9" fill="#14284a" stroke="#22d3ee" strokeWidth="3" />
              <rect x="34" y="52" width="18" height="12" rx="3" fill="#04101c" stroke="#22d3ee" strokeWidth="1.5" />
              <path d="M37 58h4l2-4 3 7 2-3h2" fill="none" stroke="#a3e635" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <g className="arm"><rect x="48" y="46" width="11" height="28" rx="5" fill="#12233f" stroke="#22d3ee" strokeWidth="2.5" /><circle cx="53.5" cy="76" r="5" fill="#22d3ee" /></g>
              <path d="M43 10V2" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" />
              <circle className="antenna-dot" cx="43" cy="2" r="3.5" fill="#a3e635" />
              <rect x="22" y="10" width="42" height="32" rx="11" fill="#14284a" stroke="#22d3ee" strokeWidth="3" />
              <rect x="28" y="18" width="30" height="16" rx="7" fill="#04101c" />
              <rect className="eye" x="33" y="23" width="6" height="7" rx="2" fill="#22d3ee" />
              <rect className="eye" x="47" y="23" width="6" height="7" rx="2" fill="#22d3ee" />
              <rect x="18" y="20" width="4" height="12" rx="2" fill="#22d3ee" /><rect x="64" y="20" width="4" height="12" rx="2" fill="#22d3ee" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}

function Chip({ small }) {
  return (
    <svg viewBox="0 0 200 160">
      <g stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" fill="none" opacity=".85">
        {[48, 70, 92, 114].map((x) => <path key={x} d={`M${x} 40v-22M${x} 120v22`} />)}
        {[52, 74, 96, 118].map((y) => <path key={y} d={`M44 ${y}h-26M156 ${y}h26`} />)}
      </g>
      <rect x="44" y="40" width="112" height="80" rx="12" fill="#0b1830" stroke="#22d3ee" strokeWidth="3.5" />
      <rect x="62" y="56" width="76" height="48" rx="6" fill="#04101c" stroke="#3b82f6" strokeWidth="2" />
      <path className="trace" d="M70 80h18l8-12 10 24 8-12h18" fill="none" stroke="#a3e635" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {!small && <text x="100" y="52" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#22d3ee">AI·CORE</text>}
    </svg>
  );
}