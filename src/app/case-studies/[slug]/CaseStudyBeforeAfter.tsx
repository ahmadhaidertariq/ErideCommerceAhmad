"use client";

import ImageWithFallback from "@/components/ImageWithFallback";
import { motion } from "framer-motion";

interface CaseStudyBeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

export default function CaseStudyBeforeAfter({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
}: CaseStudyBeforeAfterProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-2"
      >
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Before</h3>
        <div className="aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
          <ImageWithFallback
            src={beforeImage}
            alt={beforeAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="space-y-2"
      >
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider">After</h3>
        <div className="aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
          <ImageWithFallback
            src={afterImage}
            alt={afterAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </motion.div>
    </div>
  );
}
