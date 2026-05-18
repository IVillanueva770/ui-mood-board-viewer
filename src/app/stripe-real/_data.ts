/**
 * stripe-real — tokens refero EXACTOS + tipos del dominio + mock.
 *
 * Tokens extraídos de refero.design (NO inventar, NO "mejorar a ojo"):
 *   Deep Violet  #533afd · Midnight Ink #061b31 · bg #f6f9fc.
 * Sohne es propietaria de Stripe y no se puede cargar desde Google Fonts;
 * la convención del proyecto la sustituye por Inter (grotesque limpia) y
 * Source Code Pro por Roboto Mono (var(--font-roboto-mono)). Eso queda igual.
 *
 * Única fuente de datos: enchufar un backend = tocar este archivo. Cada pieza
 * recibe lo suyo por props; ninguna importa este mock directo. Negocio: infra
 * fintech precisa (Stripe REAL, no la versión amigable) — restraint absoluto.
 */

/* ---------- Tokens refero (literal) ---------- */

export const tokens = {
  bg: "#f6f9fc",
  surface: "#ffffff",
  violet: "#533afd",
  violetDeep: "#3f2fd6",
  ink: "#061b31",
  slate: "#425466",
  muted: "#697386",
  faint: "#3c4257",
  border: "#e6ebf1",
  borderSoft: "#f4f6f9",
  cyan: "#00d4ff",
  ok: "#10b981",
  warn: "#f59e0b",
  err: "#ef4444",
} as const;

/** Elevación sutil — la firma de Stripe es la contención, no la sombra dura. */
export const elevation = {
  rest: "0 1px 2px rgba(15,23,42,0.04), 0 8px 32px rgba(83,58,253,0.06)",
  hover: "0 4px 14px rgba(15,23,42,0.06), 0 18px 50px rgba(83,58,253,0.12)",
} as const;

export type StatusTone = "ok" | "warn" | "err" | "muted";

export const toneColor: Record<StatusTone, string> = {
  ok: tokens.ok,
  warn: tokens.warn,
  err: tokens.err,
  muted: tokens.muted,
};

/* ---------- Tipos del dominio ---------- */

export type Feature = { titulo: string; desc: string; icon: "card" | "split" | "shield" | "globe" | "bolt" | "ledger" };

export type CodeSample = { id: string; label: string; lang: string; lines: { t: string; c?: "kw" | "str" | "fn" | "com" }[] };

export type Compliance = { sigla: string; desc: string };

export type Metric = { label: string; val: string; delta: string; tone: "ok" | "muted" };

export type ChartPoint = { d: string; v: number };

export type Payout = { fecha: string; monto: string; estado: string; tone: StatusTone; banco: string };

export type Txn = {
  id: string;
  monto: string;
  moneda: "USD" | "EUR" | "GBP" | "BRL";
  cliente: string;
  metodo: string;
  fecha: string;
  estado: "Succeeded" | "Pending" | "Failed" | "Refunded";
  tone: StatusTone;
};

export type PaymentEvent = { hora: string; label: string; detalle: string; tone: StatusTone };

export type PaymentDetailData = {
  id: string;
  monto: string;
  estado: string;
  tone: StatusTone;
  cliente: string;
  email: string;
  metodo: string;
  riesgo: string;
  timeline: PaymentEvent[];
  metadata: { k: string; v: string }[];
};

export type ApiKey = { label: string; tipo: "Publishable" | "Secret"; valor: string; creada: string; entorno: "live" | "test" };

export type Webhook = { url: string; eventos: number; estado: StatusTone; ultimo: string };

export type LogLine = { ts: string; metodo: string; ruta: string; code: number };

export type StripeData = {
  // Externo
  features: Feature[];
  codeSamples: CodeSample[];
  compliance: Compliance[];
  trustStats: { val: string; label: string }[];
  partners: string[];
  // Interno
  metrics: Metric[];
  netVolume: ChartPoint[];
  netVolumeTotal: string;
  payouts: Payout[];
  txns: Txn[];
  txnFilters: string[];
  paymentDetail: PaymentDetailData;
  apiKeys: ApiKey[];
  webhooks: Webhook[];
  logs: LogLine[];
};

/* ---------- Mock (swap por backend acá) ---------- */

export const stripeData: StripeData = {
  features: [
    { titulo: "Payments", desc: "Aceptá tarjetas, wallets y transferencias en 135+ monedas con un solo integration.", icon: "card" },
    { titulo: "Connect", desc: "Pagá a marketplaces y plataformas con cuentas conectadas y payouts programados.", icon: "split" },
    { titulo: "Radar", desc: "Reglas y ML entrenado sobre miles de millones de transacciones para frenar fraude.", icon: "shield" },
    { titulo: "Global", desc: "Liquidación local en 46 países, recaudación de impuestos y FX incorporados.", icon: "globe" },
    { titulo: "Billing", desc: "Suscripciones, prorrateo y facturación medida sobre la misma API de pagos.", icon: "ledger" },
    { titulo: "Latencia", desc: "p99 de 42 ms en la API de PaymentIntents, multi-región activa-activa.", icon: "bolt" },
  ],

  codeSamples: [
    {
      id: "curl",
      label: "cURL",
      lang: "bash",
      lines: [
        { t: "curl https://api.stripe.com/v1/payment_intents \\", c: "fn" },
        { t: "  -u sk_live_51M••••••••: \\" },
        { t: "  -d amount=125000 \\" },
        { t: '  -d currency="usd" \\' },
        { t: "  -d \"automatic_payment_methods[enabled]\"=true" },
      ],
    },
    {
      id: "node",
      label: "Node",
      lang: "javascript",
      lines: [
        { t: "const stripe = require('stripe')(process.env.STRIPE_KEY);", c: "kw" },
        { t: "" },
        { t: "const intent = await stripe.paymentIntents.create({", c: "fn" },
        { t: "  amount: 125000," },
        { t: "  currency: 'usd',", c: "str" },
        { t: "  automatic_payment_methods: { enabled: true },", c: "com" },
        { t: "});" },
      ],
    },
    {
      id: "python",
      label: "Python",
      lang: "python",
      lines: [
        { t: "import stripe", c: "kw" },
        { t: "stripe.api_key = os.environ['STRIPE_KEY']" },
        { t: "" },
        { t: "intent = stripe.PaymentIntent.create(", c: "fn" },
        { t: "    amount=125000," },
        { t: "    currency='usd',", c: "str" },
        { t: "    automatic_payment_methods={'enabled': True},", c: "com" },
        { t: ")" },
      ],
    },
  ],

  compliance: [
    { sigla: "PCI DSS", desc: "Service Provider Level 1" },
    { sigla: "SOC 2", desc: "Type II auditado" },
    { sigla: "ISO 27001", desc: "Sistema certificado" },
    { sigla: "3-D Secure 2", desc: "SCA / PSD2 listo" },
  ],

  trustStats: [
    { val: "99.999%", label: "Uptime API (12 meses)" },
    { val: "$1.4T", label: "Procesado por año" },
    { val: "42 ms", label: "Latencia p99 PaymentIntents" },
    { val: "135+", label: "Monedas soportadas" },
  ],

  partners: ["Amazon", "Shopify", "Google", "Salesforce", "Slack", "Atlassian", "Zoom", "Mercado Libre"],

  metrics: [
    { label: "Volumen neto · mes", val: "$248,920.42", delta: "+18.4% MoM", tone: "ok" },
    { label: "Tasa de aprobación", val: "99.41%", delta: "+0.2 pp", tone: "ok" },
    { label: "Disputas abiertas", val: "3", delta: "0.04% rate", tone: "muted" },
    { label: "Saldo disponible", val: "$48,219.06", delta: "USD · liquida en 2d", tone: "muted" },
  ],

  netVolume: [
    { d: "01", v: 18 }, { d: "04", v: 22 }, { d: "07", v: 28 }, { d: "10", v: 26 },
    { d: "13", v: 33 }, { d: "16", v: 38 }, { d: "19", v: 42 }, { d: "22", v: 48 },
    { d: "25", v: 52 }, { d: "28", v: 61 }, { d: "30", v: 72 },
  ],
  netVolumeTotal: "$248,920.42",

  payouts: [
    { fecha: "May 12", monto: "$42,180.00", estado: "In transit", tone: "warn", banco: "•• 4419 · Mercury" },
    { fecha: "May 09", monto: "$38,905.50", estado: "Paid", tone: "ok", banco: "•• 4419 · Mercury" },
    { fecha: "May 06", monto: "$51,230.00", estado: "Paid", tone: "ok", banco: "•• 4419 · Mercury" },
  ],

  txns: [
    { id: "pi_3M8a2dF7gK4xLp1Q", monto: "$1,250.00", moneda: "USD", cliente: "g@alanis.com", metodo: "•• 4242 Visa", fecha: "May 8, 12:04", estado: "Succeeded", tone: "ok" },
    { id: "pi_3M7b1cE6hL3wMq0P", monto: "€340.50", moneda: "EUR", cliente: "fv@studio.fr", metodo: "•• 8810 Mastercard", fecha: "May 8, 11:48", estado: "Succeeded", tone: "ok" },
    { id: "pi_3M4p9dG8iM5yNr8R", monto: "$890.00", moneda: "USD", cliente: "ops@buenboy.co", metodo: "•• 3001 Amex", fecha: "May 8, 11:12", estado: "Pending", tone: "warn" },
    { id: "pi_3M2q1eH9jN6zOs4S", monto: "$520.00", moneda: "USD", cliente: "n.galland@kine.io", metodo: "•• 0099 Visa", fecha: "May 8, 10:55", estado: "Succeeded", tone: "ok" },
    { id: "pi_3M9r2fI0kO7aPt7T", monto: "$2,100.00", moneda: "USD", cliente: "pagos@sur.gov.ar", metodo: "•• 7711 Visa", fecha: "May 8, 10:31", estado: "Failed", tone: "err" },
    { id: "pi_3M5s3gJ1lP8bQu2U", monto: "R$1,840.00", moneda: "BRL", cliente: "hola@lobo.dev", metodo: "•• 4498 Elo", fecha: "May 8, 09:58", estado: "Succeeded", tone: "ok" },
    { id: "pi_3M1t4hK2mQ9cRv5V", monto: "£120.00", moneda: "GBP", cliente: "mf@studio.uk", metodo: "•• 1108 Visa", fecha: "May 8, 09:14", estado: "Refunded", tone: "muted" },
  ],
  txnFilters: ["Todas", "Succeeded", "Pending", "Failed", "Refunded"],

  paymentDetail: {
    id: "pi_3M9r2fI0kO7aPt7T",
    monto: "$2,100.00",
    estado: "Failed",
    tone: "err",
    cliente: "pagos@sur.gov.ar",
    email: "pagos@sur.gov.ar",
    metodo: "•• 7711 Visa · debit · AR",
    riesgo: "Elevated · 68 / 100",
    timeline: [
      { hora: "10:31:02", label: "PaymentIntent creado", detalle: "amount 210000 · usd", tone: "muted" },
      { hora: "10:31:03", label: "Método adjuntado", detalle: "card_3M•• · Visa 7711", tone: "muted" },
      { hora: "10:31:04", label: "Radar evaluó", detalle: "score 68 · regla velocity", tone: "warn" },
      { hora: "10:31:05", label: "Emisor declinó", detalle: "do_not_honor · code 530", tone: "err" },
    ],
    metadata: [
      { k: "order_id", v: "ord_9F23A1" },
      { k: "channel", v: "checkout_v2" },
      { k: "seller", v: "acct_1Mn8aDFGhJ" },
    ],
  },

  apiKeys: [
    { label: "Producción", tipo: "Publishable", valor: "pk_live_51M8a2dF7gK4xLp", creada: "feb 2024", entorno: "live" },
    { label: "Producción", tipo: "Secret", valor: "sk_live_51M••••••••••3xQv", creada: "feb 2024", entorno: "live" },
    { label: "Sandbox", tipo: "Secret", valor: "sk_test_51M••••••••••9zRt", creada: "abr 2024", entorno: "test" },
  ],

  webhooks: [
    { url: "https://api.acme.io/hooks/stripe", eventos: 14, estado: "ok", ultimo: "hace 2 min · 200" },
    { url: "https://acme.io/billing/sync", eventos: 6, estado: "warn", ultimo: "hace 9 min · 410 reintenta" },
  ],

  logs: [
    { ts: "12:04:18", metodo: "POST", ruta: "/v1/payment_intents", code: 200 },
    { ts: "12:04:11", metodo: "POST", ruta: "/v1/payment_intents/confirm", code: 200 },
    { ts: "12:03:50", metodo: "GET", ruta: "/v1/charges?limit=20", code: 200 },
    { ts: "12:03:32", metodo: "POST", ruta: "/v1/refunds", code: 402 },
    { ts: "12:02:59", metodo: "POST", ruta: "/v1/customers", code: 201 },
  ],
};
