import Image from "next/image";
import Link from 'next/link';
import { ShieldCheck, MessageSquareText, PlugZap, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <main className="text-gray-800">
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1681487683141-e72c5ccd94e6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center md:text-left">
          <div className="backdrop-blur-md bg-white/10 p-10 rounded-xl shadow-lg max-w-2xl mx-auto md:mx-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Welcome to <span className="text-indigo-400">PieChat</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Smart. Fast. Secure. The next-gen chat app that redefines communication.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/signup"
                className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
              >
                Get Started
              </Link>
              <Link
                href="/features"
                className="text-white border border-white px-6 py-3 rounded-full hover:bg-white hover:text-indigo-600 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Why Choose PieChat?</h2>
          <p className="text-gray-600 mb-12">A modern chat experience designed for professionals.</p>

          <div className="grid md:grid-cols-3 gap-20">
            {[
              {
                icon: <MessageSquareText className="w-8 h-8 text-indigo-600 mb-4 mx-auto " />,
                title: "Real-Time Messaging",
                desc: "Experience ultra-fast messaging with live typing and read indicators.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-indigo-600 mb-4 mx-auto" />,
                title: "End-to-End Security",
                desc: "Your chats are encrypted, secure, and 100% private by design.",
              },
              {
                icon: <PlugZap className="w-8 h-8 text-indigo-600 mb-4 mx-auto" />,
                title: "Smart Integrations",
                desc: "Connect with Slack, Google Drive, and dozens of other platforms.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-md transition-all text-center"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-gray-600 mb-12">Plans that grow with you and your team.</p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                name: "Free",
                price: "$0",
                desc: "Perfect for solo users",
                features: ["1 Workspace", "Unlimited Chats", "Basic Support"],
                btn: "Start Free",
              },
              {
                name: "Pro",
                price: "$9",
                desc: "Great for small teams",
                features: ["Unlimited Workspaces", "File Sharing", "Priority Support"],
                highlight: true,
                btn: "Try Pro",
              },
              {
                name: "Enterprise",
                price: "Custom",
                desc: "Tailored for businesses",
                features: ["SSO & Admin Tools", "Dedicated Manager", "24/7 Support"],
                btn: "Contact Us",
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl shadow-xl ${
                  plan.highlight ? "bg-indigo-600 text-white" : "bg-white text-gray-800"
                }`}
              >
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm mb-4">{plan.desc}</p>
                <p className="text-4xl font-bold mb-6">
                  {plan.price}
                  {plan.price !== "Custom" && <span className="text-base font-normal">/mo</span>}
                </p>
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={`block text-center py-2 rounded-full font-medium ${
                    plan.highlight
                      ? "bg-white text-indigo-600 hover:bg-gray-200"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  } transition`}
                >
                  {plan.btn}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: 'Home - PieChat',
  description: 'PieChat helps you connect with people of your choice',
};
