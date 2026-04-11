/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Droplets, BrainCircuit, AlertTriangle, Zap, Cpu, Server, Satellite, ShieldCheck, TrendingUp, Users } from 'lucide-react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [text, setText] = useState('');
  const fullText = "ML driven anomaly detection and remote irrigation system";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-emerald-950"
      exit={{ opacity: 0 }}
    >
      <motion.h1 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-6xl font-bold text-emerald-300 mb-4"
      >
        KRISHIPULSE
      </motion.h1>
      <p className="text-emerald-100 text-lg font-mono">{text}</p>
    </motion.div>
  );
};

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      {!loading && (
        <div className="min-h-screen bg-emerald-950 text-white font-sans scroll-smooth">
          <nav className="sticky top-0 z-50 bg-emerald-950/80 backdrop-blur-md border-b border-emerald-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-emerald-300">KRISHIPULSE</h1>
              <div className="space-x-6 text-sm font-medium">
                <a href="#problem" className="hover:text-emerald-300">Problem</a>
                <a href="#solution" className="hover:text-emerald-300">Solution</a>
                <a href="#tech" className="hover:text-emerald-300">Architecture</a>
              </div>
            </div>
          </nav>

          <header className="relative py-32 px-6 text-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img src="https://picsum.photos/seed/greenfields/1920/1080?blur=10" alt="Field" className="w-full h-full object-cover opacity-30" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-emerald-950/60"></div>
            </div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 max-w-4xl mx-auto">
              <h1 className="text-7xl font-extrabold mb-6 tracking-tight">Revolutionizing Irrigation with Intelligence.</h1>
              <p className="text-2xl text-emerald-100 mb-10">An ML-driven anomaly detection and remote irrigation ecosystem designed to eliminate equipment failure and optimize water usage for the modern Indian farmer.</p>
              <div className="flex justify-center gap-4">
                <button className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold py-4 px-8 rounded-full text-lg transition">View Live Dashboard</button>
                <button className="bg-transparent border border-emerald-500 hover:bg-emerald-500/10 text-emerald-300 font-bold py-4 px-8 rounded-full text-lg transition">Explore Technical Docs</button>
              </div>
            </motion.div>
          </header>

          <section id="problem" className="py-24 px-6 bg-gray-950">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-bold mb-16 text-center">Farming shouldn't be a gamble.</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <GlassCard>
                  <AlertTriangle className="w-12 h-12 text-red-400 mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">The Groundwater Crisis</h3>
                  <p className="text-gray-300">80% of Indian farmers rely on groundwater, yet management is manual and inefficient.</p>
                </GlassCard>
                <GlassCard>
                  <Zap className="w-12 h-12 text-yellow-400 mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">The Financial Drain</h3>
                  <p className="text-gray-300">30% of farmers face crippling losses due to unexpected pump failures and equipment downtime.</p>
                </GlassCard>
                <GlassCard>
                  <Users className="w-12 h-12 text-blue-400 mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">The Labor Gap</h3>
                  <p className="text-gray-300">Constant manual monitoring of remote fields is exhausting and prone to human error.</p>
                </GlassCard>
              </div>
            </div>
          </section>

          <section id="solution" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-5xl font-bold mb-16 text-center">Where IoT meets the Soil.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Leaf, title: "Sense", desc: "Edge devices (ESP32) collect real-time data on soil moisture, temperature, and pump flow." },
                  { icon: BrainCircuit, title: "Analyze", desc: "Our embedded ML model processes data locally to detect the slightest 'hiccup' in pump performance." },
                  { icon: AlertTriangle, title: "Alert", desc: "Before a failure happens, KRISHIPULSE sends a predictive alert to the farmer’s phone." },
                  { icon: Droplets, title: "Action", desc: "Toggle pumps remotely from anywhere in the world via our sleek web-app." },
                ].map((step, i) => (
                  <GlassCard key={i}>
                    <step.icon className="w-12 h-12 text-emerald-400 mb-6" />
                    <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-300">{step.desc}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </section>

          <section id="sensors" className="py-24 px-6 bg-emerald-950">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-bold mb-16 text-center">Our Sensor Suite</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { name: "SCT013", desc: "Current Sensor: Measures electrical current consumption of the pump to detect load anomalies.", img: "https://lh3.googleusercontent.com/d/1rU056O8UeOsvXUPfRkdw9wf7mZVBCDFl" },
                  { name: "ZMPT101b", desc: "Voltage Sensor: Monitors voltage levels to detect power fluctuations and protect equipment.", img: "https://lh3.googleusercontent.com/d/1O_b0hnBqrkGlA-J4TO9-k6FxslrpSM4Q" },
                  { name: "YF-S201", desc: "Water Flow Sensor: Measures the volume of water passing through pipes for precise irrigation control.", img: "https://lh3.googleusercontent.com/d/1Qmy5LSxDvc24JYolyx1VXZ3USXhifV5O" },
                ].map((sensor, i) => (
                  <GlassCard key={i}>
                    <img src={sensor.img} alt={sensor.name} className="w-full h-48 object-cover rounded-lg mb-6" referrerPolicy="no-referrer" />
                    <h3 className="text-2xl font-semibold mb-4">{sensor.name}</h3>
                    <p className="text-gray-300">{sensor.desc}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </section>

          <section id="tech" className="py-24 px-6 bg-emerald-900/30">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-bold mb-16 text-center">The Tech Stack under the Hood.</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-gray-200"><strong>Hardware:</strong> ESP32, LoraWAN for long-range connectivity, and Relay Actuators.</p>
                  <p className="text-lg text-gray-200"><strong>Intelligence:</strong> Embedded ML models running on Arduino-based logic for real-time inference.</p>
                  <p className="text-lg text-gray-200"><strong>Cloud:</strong> Firebase for real-time data syncing and user authentication.</p>
                  <p className="text-lg text-gray-200"><strong>Frontend:</strong> Built with Vite + React for lightning-fast performance.</p>
                </div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {[
                    { title: "Sensor Data Acquisition", desc: "Edge devices (ESP32) collect raw readings." },
                    { title: "Data Processing & Filtering", desc: "Pre-process raw readings, remove noise." },
                    { title: "ML Inference & Analysis", desc: "Run embedded ML model on real-time data." },
                    { title: "Predictive Alert", desc: "Potential failure detected? Alert generated." },
                    { title: "Action", desc: "Remote toggle pump via web-app." },
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition"
                    >
                      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 mt-1">
                        <div className="w-3 h-3 bg-emerald-950 rounded-full" />
                      </div>
                      <div>
                        <h4 className="font-bold text-emerald-300">{step.title}</h4>
                        <p className="text-sm text-gray-300">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-24 px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-5xl font-bold mb-16 text-center">The Vision</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <GlassCard>
                  <Satellite className="w-12 h-12 text-emerald-400 mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Satellite Sync</h3>
                  <p className="text-gray-300">Integrating weather data to predict irrigation needs before the sun even comes up.</p>
                </GlassCard>
                <GlassCard>
                  <ShieldCheck className="w-12 h-12 text-emerald-400 mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Leakage Detection</h3>
                  <p className="text-gray-300">Expanding sensor networks to pinpoint pipe bursts within centimeters.</p>
                </GlassCard>
                <GlassCard>
                  <TrendingUp className="w-12 h-12 text-emerald-400 mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Community Data</h3>
                  <p className="text-gray-300">Aggregating farm data to help local authorities manage power distribution more effectively.</p>
                </GlassCard>
              </div>
            </div>
          </section>

          <footer className="py-12 text-center text-gray-500 border-t border-emerald-800">
            <p className="text-lg font-semibold text-emerald-300 mb-2">Sahil Rathod & Team</p>
            <p>"First-year Computer Engineering students from PCCOE&R Pune, bridging the gap between Silicon Valley tech and Indian Agriculture."</p>
          </footer>
        </div>
      )}
    </>
  );
}
