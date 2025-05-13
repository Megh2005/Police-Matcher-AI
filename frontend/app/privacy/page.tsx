"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, FileText } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[80vw] mx-auto"
      >
        <div className="flex items-center mb-8">
          <Lock className="h-8 w-8 text-[#2973B2] mr-3" />
          <h1 className="text-3xl font-bold text-[#2973B2]">Privacy Policy</h1>
        </div>

        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-8 border border-[#9ACBD0] dark:border-[#48A6A7]">
          <p className="mb-6 text-lg">
            At PoliceAdvisor, we take your privacy seriously. This Privacy Policy explains how we collect, use, and
            protect your information.
          </p>

          <div className="space-y-8">
            <section>
              <div className="flex items-center mb-3">
                <Shield className="h-5 w-5 text-[#2973B2] mr-2" />
                <h2 className="text-xl font-semibold text-[#2973B2]">Information We Collect</h2>
              </div>
              <p className="mb-3">We collect the following types of information when you use our service:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Case descriptions and details you provide</li>
                <li>Audio recordings when using voice input (converted to text and then discarded)</li>
                <li>Usage data to improve our service</li>
                <li>Technical information about your device and connection</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center mb-3">
                <Eye className="h-5 w-5 text-[#2973B2] mr-2" />
                <h2 className="text-xl font-semibold text-[#2973B2]">How We Use Your Information</h2>
              </div>
              <p className="mb-3">We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To match appropriate officers to your case</li>
                <li>To improve and optimize our matching algorithms</li>
                <li>To detect and prevent technical issues or abuse</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center mb-3">
                <Lock className="h-5 w-5 text-[#2973B2] mr-2" />
                <h2 className="text-xl font-semibold text-[#2973B2]">Data Security</h2>
              </div>
              <p>
                We implement appropriate security measures to protect your data against unauthorized access, alteration,
                disclosure, or destruction. All data is encrypted both in transit and at rest. We regularly review our
                security practices to ensure the highest level of protection.
              </p>
            </section>

            <section>
              <div className="flex items-center mb-3">
                <FileText className="h-5 w-5 text-[#2973B2] mr-2" />
                <h2 className="text-xl font-semibold text-[#2973B2]">Data Retention</h2>
              </div>
              <p>
                We retain your data only for as long as necessary to fulfill the purposes outlined in this Privacy
                Policy. Case information is stored for a maximum of 90 days, after which it is automatically deleted
                from our systems.
              </p>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-[#9ACBD0] dark:border-[#48A6A7]">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Last updated: May 13, 2025</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              If you have any questions about this Privacy Policy, please contact us at privacy@policeadvisor.com
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
