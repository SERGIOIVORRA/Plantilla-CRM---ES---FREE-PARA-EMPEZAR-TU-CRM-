"use client"

import * as React from "react"
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  FileText,
  Settings,
  Bell,
  Search,
  TrendingUp,
  DollarSign,
  UserPlus,
  Clock,
  Moon,
  Sun,
  Menu,
  Plug,
  Store,
  Code2,
  Webhook,
  Server,
  ChevronDown,
  Boxes,
  Tags,
  CheckCircle2,
  Circle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const sidebarNavItems = [
  { id: "panel", icon: LayoutDashboard, label: "Panel" },
  { id: "clientes", icon: Users, label: "Clientes" },
  { id: "negocios", icon: ShoppingCart, label: "Negocios" },
  { id: "informes", icon: FileText, label: "Informes" },
  { id: "ajustes", icon: Settings, label: "Ajustes" },
]

const integrationItems = [
  { id: "integraciones", icon: Plug, label: "Integraciones" },
  { id: "api-crm", icon: Code2, label: "API del CRM" },
  { id: "webhooks", icon: Webhook, label: "Webhooks" },
  { id: "proxy", icon: Server, label: "Conectar con proxy" },
]

const shopifySubItems = [
  { id: "shopify-metaobjetos", icon: Boxes, label: "Conexión a metaobjetos" },
  { id: "shopify-metacampos", icon: Tags, label: "Conexión a metacampos" },
]

const statCards = [
  {
    title: "Ingresos totales",
    value: "124.563 €",
    change: "+12,5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Clientes nuevos",
    value: "2.847",
    change: "+8,2%",
    trend: "up",
    icon: UserPlus,
  },
  {
    title: "Negocios pendientes",
    value: "156",
    change: "-3,1%",
    trend: "down",
    icon: Clock,
  },
  {
    title: "Tasa de conversión",
    value: "24,6%",
    change: "+4,3%",
    trend: "up",
    icon: TrendingUp,
  },
]

const revenueChartData = [
  { month: "Ene", ingresos: 45000, negocios: 28 },
  { month: "Feb", ingresos: 52000, negocios: 35 },
  { month: "Mar", ingresos: 48000, negocios: 31 },
  { month: "Abr", ingresos: 61000, negocios: 42 },
  { month: "May", ingresos: 55000, negocios: 38 },
  { month: "Jun", ingresos: 67000, negocios: 45 },
]

const chartConfig = {
  ingresos: {
    label: "Ingresos",
    theme: {
      light: "var(--chart-1)",
      dark: "var(--chart-1)",
    },
  },
  negocios: {
    label: "Negocios",
    theme: {
      light: "var(--chart-2)",
      dark: "var(--chart-2)",
    },
  },
}

const recentDeals = [
  {
    id: "NEG-001",
    customer: "Acme Corp",
    contact: "Sara López",
    email: "sara@acmecorp.com",
    value: "45.000 €",
    status: "Ganado",
    progress: 100,
  },
  {
    id: "NEG-002",
    customer: "TechStart Inc",
    contact: "Miguel Chen",
    email: "m.chen@techstart.io",
    value: "28.500 €",
    status: "Negociación",
    progress: 75,
  },
  {
    id: "NEG-003",
    customer: "Global Solutions",
    contact: "Emma Ruiz",
    email: "emma@globalsol.com",
    value: "67.000 €",
    status: "Propuesta",
    progress: 50,
  },
  {
    id: "NEG-004",
    customer: "NextGen Labs",
    contact: "David Park",
    email: "d.park@nextgenlabs.tech",
    value: "34.200 €",
    status: "Cualificado",
    progress: 25,
  },
  {
    id: "NEG-005",
    customer: "Innovate Co",
    contact: "Lisa Martínez",
    email: "lisa@innovate.co",
    value: "52.800 €",
    status: "Ganado",
    progress: 100,
  },
]

const topCustomers = [
  { name: "Acme Corporation", initials: "AC", revenue: "245.000 €", deals: 12 },
  { name: "TechStart Inc", initials: "TS", revenue: "189.500 €", deals: 8 },
  { name: "Global Solutions Ltd", initials: "GS", revenue: "156.200 €", deals: 6 },
  { name: "NextGen Labs", initials: "NG", revenue: "98.400 €", deals: 5 },
  { name: "Innovate Partners", initials: "IP", revenue: "87.300 €", deals: 4 },
]

function StatCard({
  title,
  value,
  change,
  trend,
  icon: Icon,
}: (typeof statCards)[0]) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardDescription className="text-muted-foreground">
          {title}
        </CardDescription>
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="size-5 text-primary" data-icon="inline-start" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">{value}</span>
          <Badge
            variant={trend === "up" ? "default" : "destructive"}
            className="text-xs"
          >
            {change}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}

function RevenueChart() {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Resumen de ingresos</CardTitle>
        <CardDescription>Ingresos y negocios mensuales de 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueChartData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="month" className="text-xs" />
              <YAxis className="text-xs" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="ingresos" fill="var(--color-ingresos)" name="Ingresos" radius={[4, 4, 0, 0]} />
              <Bar dataKey="negocios" fill="var(--color-negocios)" name="Negocios" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function DealsTable() {
  return (
    <Card className="col-span-1 lg:col-span-3">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Negocios recientes</CardTitle>
            <CardDescription>Últimos negocios y su estado</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            Ver todos
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Progreso</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentDeals.map((deal) => (
              <TableRow key={deal.id}>
                <TableCell className="font-medium">{deal.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium">{deal.customer}</span>
                    <span className="text-xs text-muted-foreground">
                      {deal.contact}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{deal.value}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      deal.status === "Ganado"
                        ? "default"
                        : deal.status === "Negociación"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {deal.status}
                  </Badge>
                </TableCell>
                <TableCell className="w-[150px]">
                  <div className="flex items-center gap-2">
                    <Progress value={deal.progress} className="h-2" />
                    <span className="text-xs text-muted-foreground">
                      {deal.progress}%
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

function TopCustomers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mejores clientes</CardTitle>
        <CardDescription>Por ingresos totales</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {topCustomers.map((customer) => (
            <div key={customer.name} className="flex items-center gap-3">
              <Avatar className="size-9">
                <AvatarFallback>{customer.initials}</AvatarFallback>
              </Avatar>
              <div className="flex flex-1 items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{customer.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {customer.deals} negocios
                  </span>
                </div>
                <span className="font-medium">{customer.revenue}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function BrandLogo({ size = "md" }: { size?: "sm" | "md" }) {
  const box = size === "sm" ? "size-8" : "size-10"
  return (
    <div className={`relative ${box} overflow-hidden rounded-lg ring-2 ring-primary/40`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="Logo"
        className="size-full object-cover object-center"
      />
    </div>
  )
}

function NavButton({
  active,
  onClick,
  children,
  className = "",
}: {
  active?: boolean
  onClick: () => void
  children: React.ReactNode
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex w-full shrink-0 items-center justify-start gap-2 rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
        active
          ? "bg-primary text-primary-foreground"
          : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      } ${className}`}
    >
      {children}
    </button>
  )
}

function SectionPlaceholder({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children?: React.ReactNode
}) {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  )
}

function ConnectionCard({
  title,
  description,
  connected = false,
}: {
  title: string
  description: string
  connected?: boolean
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div>
          <CardTitle className="text-base">{title}</CardTitle>
          <CardDescription className="mt-1">{description}</CardDescription>
        </div>
        <Badge variant={connected ? "default" : "outline"} className="shrink-0 gap-1">
          {connected ? (
            <CheckCircle2 className="size-3" />
          ) : (
            <Circle className="size-3" />
          )}
          {connected ? "Conectado" : "Desconectado"}
        </Badge>
      </CardHeader>
      <CardContent className="flex gap-2">
        <Button size="sm">{connected ? "Gestionar" : "Conectar"}</Button>
        <Button size="sm" variant="outline">
          Documentación
        </Button>
      </CardContent>
    </Card>
  )
}

function IntegrationsView() {
  return (
    <SectionPlaceholder
      title="Integraciones"
      description="Conecta tu CRM con Shopify, APIs, webhooks y proxy."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <ConnectionCard
          title="Shopify"
          description="Sincroniza metaobjetos y metacampos con tu tienda."
        />
        <ConnectionCard
          title="API del CRM"
          description="Accede a endpoints REST para leer y escribir datos."
        />
        <ConnectionCard
          title="Webhooks"
          description="Recibe eventos en tiempo real de pedidos, clientes y más."
        />
        <ConnectionCard
          title="Proxy"
          description="Enruta peticiones a través de tu servidor proxy."
        />
      </div>
    </SectionPlaceholder>
  )
}

function ShopifyMetaobjetosView() {
  return (
    <SectionPlaceholder
      title="Shopify · Metaobjetos"
      description="Conexión a metaobjetos de Shopify para sincronizar estructuras personalizadas."
    >
      <ConnectionCard
        title="Conexión a metaobjetos"
        description="Autoriza el acceso a Metaobjects API de tu tienda Shopify."
      />
      <Card>
        <CardHeader>
          <CardTitle>Definiciones detectadas</CardTitle>
          <CardDescription>Metaobjetos disponibles en la tienda (demo)</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {["clientes_b2b", "fichas_producto", "promociones"].map((name) => (
            <div
              key={name}
              className="flex items-center justify-between rounded-lg border px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <Boxes className="size-4 text-primary" />
                <span className="font-medium">{name}</span>
              </div>
              <Button size="sm" variant="outline">
                Sincronizar
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </SectionPlaceholder>
  )
}

function ShopifyMetacamposView() {
  return (
    <SectionPlaceholder
      title="Shopify · Metacampos"
      description="Conexión a metacampos de Shopify para productos, clientes y pedidos."
    >
      <ConnectionCard
        title="Conexión a metacampos"
        description="Autoriza el acceso a Metafields API de tu tienda Shopify."
      />
      <Card>
        <CardHeader>
          <CardTitle>Namespaces detectados</CardTitle>
          <CardDescription>Metacampos listos para mapear (demo)</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {[
            { ns: "custom.crm_id", owner: "Cliente" },
            { ns: "custom.deal_stage", owner: "Pedido" },
            { ns: "custom.score", owner: "Producto" },
          ].map((item) => (
            <div
              key={item.ns}
              className="flex items-center justify-between rounded-lg border px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <Tags className="size-4 text-primary" />
                <div>
                  <span className="font-medium">{item.ns}</span>
                  <p className="text-xs text-muted-foreground">{item.owner}</p>
                </div>
              </div>
              <Button size="sm" variant="outline">
                Mapear
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </SectionPlaceholder>
  )
}

function ApiCrmView() {
  return (
    <SectionPlaceholder
      title="API del CRM"
      description="Claves, endpoints y ejemplos para integrar sistemas externos."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <ConnectionCard
          title="Clave de API"
          description="Genera y rota tokens para autenticar peticiones."
        />
        <Card>
          <CardHeader>
            <CardTitle>Endpoints principales</CardTitle>
            <CardDescription>Base URL: https://tu-crm.com/api/v1</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 font-mono text-sm">
            <p>GET /clientes</p>
            <p>POST /negocios</p>
            <p>GET /informes/ventas</p>
            <p>PUT /integraciones/shopify</p>
          </CardContent>
        </Card>
      </div>
    </SectionPlaceholder>
  )
}

function WebhooksView() {
  return (
    <SectionPlaceholder
      title="Webhooks"
      description="Configura URLs que recibirán eventos del CRM y de Shopify."
    >
      <ConnectionCard
        title="Endpoint de webhooks"
        description="URL pública donde escucharás los eventos entrantes."
      />
      <Card>
        <CardHeader>
          <CardTitle>Eventos disponibles</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {[
            "cliente.creado",
            "negocio.actualizado",
            "pedido.pagado",
            "shopify.metaobjeto.sincronizado",
          ].map((ev) => (
            <div
              key={ev}
              className="flex items-center justify-between rounded-lg border px-3 py-2"
            >
              <span className="font-mono text-sm">{ev}</span>
              <Badge variant="outline">Inactivo</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </SectionPlaceholder>
  )
}

function ProxyView() {
  return (
    <SectionPlaceholder
      title="Conectar con proxy"
      description="Enruta el tráfico del CRM a través de un servidor proxy seguro."
    >
      <Card>
        <CardHeader>
          <CardTitle>Configuración del proxy</CardTitle>
          <CardDescription>Introduce la URL y credenciales de tu proxy</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 max-w-xl">
          <div className="grid gap-2">
            <label className="text-sm font-medium">URL del proxy</label>
            <Input placeholder="https://proxy.tudominio.com" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Token / API key</label>
            <Input placeholder="••••••••••••" type="password" />
          </div>
          <div className="flex gap-2">
            <Button>Guardar y conectar</Button>
            <Button variant="outline">Probar conexión</Button>
          </div>
        </CardContent>
      </Card>
    </SectionPlaceholder>
  )
}

function SidebarContent({
  darkMode,
  onToggleDarkMode,
  activeSection,
  onSelectSection,
}: {
  darkMode: boolean
  onToggleDarkMode: () => void
  activeSection: string
  onSelectSection: (id: string) => void
}) {
  const [shopifyOpen, setShopifyOpen] = React.useState(
    activeSection.startsWith("shopify")
  )

  React.useEffect(() => {
    if (activeSection.startsWith("shopify")) {
      setShopifyOpen(true)
    }
  }, [activeSection])

  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
      <div className="flex items-center gap-2 px-4 py-6">
        <BrandLogo />
        <span className="text-lg font-semibold tracking-tight">Mi CRM</span>
      </div>
      <Separator className="bg-sidebar-border" />
      <nav className="flex-1 overflow-y-auto px-4 py-4">
        <div className="flex flex-col gap-1">
          {sidebarNavItems.map((item) => (
            <NavButton
              key={item.id}
              active={activeSection === item.id}
              onClick={() => onSelectSection(item.id)}
            >
              <item.icon className="size-4" data-icon="inline-start" />
              {item.label}
            </NavButton>
          ))}
        </div>

        <p className="mt-6 mb-2 px-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Conexiones
        </p>
        <div className="flex flex-col gap-1">
          <NavButton
            active={activeSection === "integraciones"}
            onClick={() => onSelectSection("integraciones")}
          >
            <Plug className="size-4" data-icon="inline-start" />
            Integraciones
          </NavButton>

          <button
            type="button"
            onClick={() => setShopifyOpen((v) => !v)}
            className={`inline-flex w-full items-center justify-start gap-2 rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
              activeSection.startsWith("shopify")
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }`}
          >
            <Store className="size-4" data-icon="inline-start" />
            <span className="flex-1 text-left">Shopify</span>
            <ChevronDown
              className={`size-4 transition-transform ${shopifyOpen ? "rotate-180" : ""}`}
            />
          </button>

          {shopifyOpen && (
            <div className="ml-3 flex flex-col gap-1 border-l border-sidebar-border pl-2">
              {shopifySubItems.map((item) => (
                <NavButton
                  key={item.id}
                  active={activeSection === item.id}
                  onClick={() => onSelectSection(item.id)}
                  className="text-xs"
                >
                  <item.icon className="size-3.5" data-icon="inline-start" />
                  {item.label}
                </NavButton>
              ))}
            </div>
          )}

          {integrationItems
            .filter((item) => item.id !== "integraciones")
            .map((item) => (
              <NavButton
                key={item.id}
                active={activeSection === item.id}
                onClick={() => onSelectSection(item.id)}
              >
                <item.icon className="size-4" data-icon="inline-start" />
                {item.label}
              </NavButton>
            ))}
        </div>
      </nav>
      <Separator className="bg-sidebar-border" />
      <div className="p-4">
        <button
          onClick={onToggleDarkMode}
          className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer"
        >
          <Avatar className="size-9">
            <AvatarImage src="/logo.png" alt="Usuario" />
            <AvatarFallback>SI</AvatarFallback>
          </Avatar>
          <div className="flex flex-1 flex-col text-left">
            <span className="text-sm font-medium">Sergio Ivorra</span>
            <span className="text-xs text-muted-foreground">
              {darkMode ? "Modo oscuro" : "Modo claro"}
            </span>
          </div>
          {darkMode ? (
            <Sun className="size-4" data-icon="inline-end" />
          ) : (
            <Moon className="size-4" data-icon="inline-end" />
          )}
        </button>
      </div>
    </div>
  )
}

function MobileSidebar({
  darkMode,
  onToggleDarkMode,
  activeSection,
  onSelectSection,
}: {
  darkMode: boolean
  onToggleDarkMode: () => void
  activeSection: string
  onSelectSection: (id: string) => void
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <div
          role="button"
          tabIndex={0}
          className="inline-flex shrink-0 items-center justify-center rounded-lg px-2 py-1.5 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground cursor-pointer lg:hidden"
          onClick={() => setOpen(true)}
          onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
        >
          <Menu className="size-5" data-icon="inline-start" />
          <span className="sr-only">Abrir menú</span>
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <SheetHeader className="sr-only">
          <SheetTitle>Navegación</SheetTitle>
        </SheetHeader>
        <SidebarContent
          darkMode={darkMode}
          onToggleDarkMode={onToggleDarkMode}
          activeSection={activeSection}
          onSelectSection={(id) => {
            onSelectSection(id)
            setOpen(false)
          }}
        />
      </SheetContent>
    </Sheet>
  )
}

function DashboardHome({
  activeTab,
  setActiveTab,
}: {
  activeTab: string
  setActiveTab: (v: string) => void
}) {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Panel</h1>
        <p className="text-muted-foreground">
          ¡Bienvenido de nuevo! Aquí tienes el resumen de tus ventas.
        </p>
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="analytics">Analítica</TabsTrigger>
          <TabsTrigger value="reports">Informes</TabsTrigger>
        </TabsList>
        <TabsContent value={activeTab} className="mt-6">
          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {statCards.map((stat) => (
                <StatCard key={stat.title} {...stat} />
              ))}
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <RevenueChart />
              <TopCustomers />
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <DealsTable />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = React.useState("overview")
  const [darkMode, setDarkMode] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("panel")

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const renderMain = () => {
    switch (activeSection) {
      case "integraciones":
        return <IntegrationsView />
      case "shopify-metaobjetos":
        return <ShopifyMetaobjetosView />
      case "shopify-metacampos":
        return <ShopifyMetacamposView />
      case "api-crm":
        return <ApiCrmView />
      case "webhooks":
        return <WebhooksView />
      case "proxy":
        return <ProxyView />
      case "clientes":
        return (
          <SectionPlaceholder
            title="Clientes"
            description="Gestiona tu base de clientes."
          >
            <TopCustomers />
          </SectionPlaceholder>
        )
      case "negocios":
        return (
          <SectionPlaceholder
            title="Negocios"
            description="Sigue el estado de tus oportunidades."
          >
            <DealsTable />
          </SectionPlaceholder>
        )
      case "informes":
        return (
          <SectionPlaceholder
            title="Informes"
            description="Analítica e informes de ventas."
          >
            <RevenueChart />
          </SectionPlaceholder>
        )
      case "ajustes":
        return (
          <SectionPlaceholder
            title="Ajustes"
            description="Preferencias generales de tu CRM."
          >
            <Card>
              <CardHeader>
                <CardTitle>Preferencias</CardTitle>
                <CardDescription>Idioma, tema y notificaciones</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Español · Tema rojo y negro · Notificaciones activadas
              </CardContent>
            </Card>
          </SectionPlaceholder>
        )
      default:
        return (
          <DashboardHome activeTab={activeTab} setActiveTab={setActiveTab} />
        )
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="hidden w-64 flex-col border-r border-sidebar-border bg-sidebar lg:flex">
        <SidebarContent
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode(!darkMode)}
          activeSection={activeSection}
          onSelectSection={setActiveSection}
        />
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-card px-6">
          <MobileSidebar
            darkMode={darkMode}
            onToggleDarkMode={() => setDarkMode(!darkMode)}
            activeSection={activeSection}
            onSelectSection={setActiveSection}
          />
          <div className="flex items-center gap-2 lg:hidden">
            <BrandLogo size="sm" />
            <span className="font-semibold">Mi CRM</span>
          </div>
          <div className="flex flex-1 items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                data-icon="inline-start"
              />
              <Input
                placeholder="Buscar clientes, negocios..."
                className="pl-9"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <Sun className="size-5" data-icon="inline-start" />
              ) : (
                <Moon className="size-5" data-icon="inline-start" />
              )}
              <span className="sr-only">Cambiar tema</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="size-5" data-icon="inline-start" />
              <span className="sr-only">Notificaciones</span>
            </Button>
          </div>
        </header>
        <main className="flex-1 p-6">{renderMain()}</main>
      </div>
    </div>
  )
}
