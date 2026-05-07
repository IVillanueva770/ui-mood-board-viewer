"use client";

import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";

export default function ClinicoCalmadoPage() {
  const e = getEstilo("clinico-calmado")!;

  return (
    <div style={{ backgroundColor: "#ffffff", color: "#0f172a", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#e2e8f0" navColor="#64748b" />

      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-8 sm:py-10">
        {/* ====== HERO COMERCIAL — SaaS para consultorios kinesiológicos ====== */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 sm:mb-20 py-12 sm:py-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-7" style={{ backgroundColor: "#e0f2fe", color: "#0369a1" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#0ea5e9" }} />
            <span className="text-xs font-semibold tracking-wide">Software clínico · Kinesiología</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] mb-5 max-w-3xl mx-auto">
            Tu consultorio,<br />
            <span style={{ color: "#0ea5e9" }}>menos administración.</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-9" style={{ color: "#64748b" }}>
            Klin organiza tu agenda, las fichas de paciente, las altas y las planillas. Vos atendés. Lo demás lo manejamos nosotros.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
            <button
              className="px-6 py-3 rounded-lg text-sm font-semibold text-white"
              style={{ backgroundColor: "#0ea5e9" }}
            >
              Probar 30 días gratis
            </button>
            <button
              className="px-6 py-3 rounded-lg text-sm font-semibold"
              style={{ border: "1px solid #e2e8f0", color: "#0f172a" }}
            >
              Agendar demo →
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto pt-10" style={{ borderTop: "1px solid #e2e8f0" }}>
            {[
              { val: "1.200+", label: "Kinesiólogos activos" },
              { val: "47k", label: "Sesiones al mes" },
              { val: "11s", label: "Para cargar una ficha" },
              { val: "94%", label: "Renueva al año" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight tabular-nums">{s.val}</p>
                <p className="text-xs mt-1" style={{ color: "#64748b" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Divider de cambio de modo */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px" style={{ backgroundColor: "#e2e8f0" }} />
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: "#64748b" }}>
            Así se ve adentro · panel del kine
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: "#e2e8f0" }} />
        </div>

        {/* ====== VISTA OPERATIVA ====== */}
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex items-end justify-between flex-wrap gap-3"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.15em] mb-1.5" style={{ color: "#0ea5e9" }}>
              Vista profesional
            </p>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Tu agenda de hoy</h1>
            <p className="text-sm mt-1" style={{ color: "#64748b" }}>Miércoles 7 de mayo · 6 pacientes confirmados</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <button
              className="px-3 py-1.5 rounded-lg font-medium transition-colors hover:bg-slate-50"
              style={{ border: "1px solid #e2e8f0", color: "#0f172a" }}
            >
              Esta semana
            </button>
            <button
              className="px-3 py-1.5 rounded-lg text-white font-medium"
              style={{ backgroundColor: "#0ea5e9" }}
            >
              + Nueva cita
            </button>
          </div>
        </motion.section>

        {/* Two-column layout: timeline + paciente seleccionado */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 bg-white rounded-xl"
            style={{ border: "1px solid #e2e8f0" }}
          >
            <div className="px-5 py-3 flex items-center justify-between" style={{ borderBottom: "1px solid #e2e8f0" }}>
              <p className="font-semibold text-sm">Agenda</p>
              <p className="text-xs" style={{ color: "#64748b" }}>4 confirmados · 2 por confirmar</p>
            </div>
            <div className="divide-y" style={{ borderColor: "#f1f5f9" }}>
              {[
                { hora: "08:30", paciente: "Carla Méndez", motivo: "Movilidad cervical · sesión 4/8", estado: "confirmado", duracion: "45 min", activo: false },
                { hora: "09:30", paciente: "Roberto Páez", motivo: "Rehabilitación rodilla · sesión 12/16", estado: "en curso", duracion: "60 min", activo: true },
                { hora: "10:45", paciente: "Lucía Fernández", motivo: "Primera consulta · evaluación", estado: "confirmado", duracion: "60 min", activo: false },
                { hora: "12:00", paciente: "Diego Suárez", motivo: "Dolor lumbar crónico · sesión 7/10", estado: "por confirmar", duracion: "45 min", activo: false },
                { hora: "16:00", paciente: "Ana Morales", motivo: "Pos-operatorio hombro · sesión 3/12", estado: "confirmado", duracion: "60 min", activo: false },
                { hora: "17:30", paciente: "Marcos Téllez", motivo: "Movilidad lumbar · sesión 2/8", estado: "por confirmar", duracion: "45 min", activo: false },
              ].map((c, i) => (
                <motion.div
                  key={c.hora}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.04 }}
                  className="px-5 py-3 flex items-start gap-4 cursor-pointer transition-colors hover:bg-sky-50/50"
                  style={{ backgroundColor: c.activo ? "#f0f9ff" : "transparent" }}
                >
                  <div className="text-sm font-semibold tabular-nums w-12 shrink-0" style={{ color: c.activo ? "#0ea5e9" : "#0f172a" }}>
                    {c.hora}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <p className="font-medium text-sm">{c.paciente}</p>
                      {c.activo && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded font-semibold flex items-center gap-1" style={{ backgroundColor: "#0ea5e9", color: "#fff" }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          AHORA
                        </span>
                      )}
                    </div>
                    <p className="text-xs" style={{ color: "#64748b" }}>{c.motivo}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span
                      className="text-[11px] px-2 py-0.5 rounded-md font-medium whitespace-nowrap"
                      style={{
                        backgroundColor: c.estado === "confirmado" ? "#e0f2fe" : c.estado === "en curso" ? "#dcfce7" : "#fef3c7",
                        color: c.estado === "confirmado" ? "#0369a1" : c.estado === "en curso" ? "#166534" : "#92400e",
                      }}
                    >
                      {c.estado}
                    </span>
                    <p className="text-[11px] mt-1" style={{ color: "#64748b" }}>{c.duracion}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Paciente activo */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl p-5"
            style={{ border: "1px solid #e2e8f0" }}
          >
            <p className="text-xs uppercase tracking-wider mb-3" style={{ color: "#64748b" }}>En consulta</p>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #0ea5e9, #0284c7)" }}
              >
                RP
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm">Roberto Páez</p>
                <p className="text-xs" style={{ color: "#64748b" }}>52 años · 3ra sesión del mes</p>
              </div>
            </div>

            <div className="space-y-2.5 mb-5 text-sm">
              <div className="flex justify-between">
                <span style={{ color: "#64748b" }}>Programa</span>
                <span className="font-medium">Rehab. rodilla</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: "#64748b" }}>Progreso</span>
                <span className="font-medium">12 de 16</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: "#64748b" }}>Próxima alta</span>
                <span className="font-medium">28 may</span>
              </div>
            </div>

            <div className="h-1.5 rounded-full overflow-hidden mb-5" style={{ backgroundColor: "#e2e8f0" }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #0ea5e9, #38bdf8)" }}
              />
            </div>

            <div className="space-y-2">
              <button className="w-full py-2 rounded-lg text-sm font-medium text-white" style={{ backgroundColor: "#0ea5e9" }}>
                Abrir ficha
              </button>
              <button
                className="w-full py-2 rounded-lg text-sm font-medium transition-colors hover:bg-slate-50"
                style={{ border: "1px solid #e2e8f0", color: "#0f172a" }}
              >
                Cargar evolución
              </button>
            </div>
          </motion.div>
        </div>

        {/* Métricas semana */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl p-5 mb-10"
          style={{ border: "1px solid #e2e8f0" }}
        >
          <p className="font-semibold text-sm mb-4">Resumen semanal</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "32", label: "Sesiones realizadas" },
              { val: "94%", label: "Asistencia" },
              { val: "4", label: "Altas previstas" },
              { val: "8h 45m", label: "Tiempo en consulta" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-semibold tracking-tight tabular-nums" style={{ color: "#0f172a" }}>{s.val}</p>
                <p className="text-xs mt-0.5" style={{ color: "#64748b" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <StyleFooter estilo={e} textColor="#64748b" borderColor="#e2e8f0" />
      </main>
    </div>
  );
}
