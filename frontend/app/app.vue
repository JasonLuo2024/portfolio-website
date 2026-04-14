<template>
  <UApp>
    <!-- Header -->
    <UHeader
      :ui="{
        root: 'bg-background/80 backdrop-blur border-b border-default',
        container: 'max-w-5xl',
      }"
    >
      <template #left>
        <span class="font-bold text-lg tracking-tight">
          Haoming <span class="text-primary">Luo</span>
        </span>
      </template>
      <template #right>
        <UButton
          icon="i-lucide-download"
          label="Download PDF"
          color="primary"
          variant="subtle"
          size="sm"
        />
        <UColorModeButton />
      </template>
    </UHeader>

    <UMain>
      <!-- Hero -->
      <UPageHero
        :ui="{
          root: 'py-16 sm:py-24',
          container: 'max-w-5xl gap-12 sm:grid-cols-2 items-center',
          title: 'text-5xl sm:text-6xl font-extrabold tracking-tight',
          description: 'text-base mt-4 max-w-xl',
        }"
        :links="heroLinks"
      >
        <template #headline>
          <UBadge
            icon="i-lucide-circle-check"
            label="AWS Certified · 4 Active Certifications"
            color="primary"
            variant="subtle"
            size="md"
          />
        </template>
        <template #title>
          Software Developer<br />
          <span class="text-primary">Cloud & Data</span><br />
          Engineering
        </template>
        <template #description>
          AWS-certified engineer specializing in distributed data systems and
          cloud-native platform engineering. ~3 years architecting
          production-scale ingestion pipelines and event-driven systems across
          AWS.
        </template>
        <template #default>
          <div class="flex flex-col gap-3 w-full">
            <UCard
              v-for="cert in certs"
              :key="cert.code"
              variant="subtle"
              :ui="{
                root: 'ring-1 ring-primary/20 hover:ring-primary/50 transition-all',
                body: 'p-3 sm:p-3',
              }"
            >
              <div class="flex items-center gap-3">
                <UIcon
                  name="i-simple-icons-amazonaws"
                  class="size-5 text-primary shrink-0"
                />
                <div class="flex-1 min-w-0">
                  <div class="font-semibold text-sm text-highlighted truncate">
                    {{ cert.name }}
                  </div>
                  <div class="text-xs text-muted font-mono">
                    {{ cert.code }} · {{ cert.expiry }}
                  </div>
                </div>
                <UBadge
                  :label="cert.level"
                  :color="
                    cert.level === 'Professional' ? 'secondary' : 'primary'
                  "
                  variant="subtle"
                  size="xs"
                />
              </div>
            </UCard>
            <UCard
              variant="subtle"
              :ui="{
                root: 'ring-1 ring-primary/20 hover:ring-primary/50 transition-all',
                body: 'p-3 sm:p-3',
              }"
            >
              <div class="flex items-center gap-3">
                <UIcon
                  name="i-simple-icons-terraform"
                  class="size-5 text-purple-400 shrink-0"
                />
                <div class="flex-1">
                  <div class="font-semibold text-sm text-highlighted">
                    Terraform Associate (003)
                  </div>
                  <div class="text-xs text-muted font-mono">
                    HashiCorp · Mar 2026 – Mar 2028
                  </div>
                </div>
                <UBadge
                  label="Certified"
                  color="success"
                  variant="subtle"
                  size="xs"
                />
              </div>
            </UCard>
          </div>
        </template>
      </UPageHero>

      <!-- Impact Stats -->
      <UPageSection
        title="Cloud Impact"
        description="Measurable outcomes from production AWS systems at Angler Solutions."
        :ui="{
          root: 'bg-elevated/50 py-12',
          container: 'max-w-5xl',
          title: 'text-2xl font-bold',
        }"
      >
        <UPageGrid :ui="{ root: 'grid-cols-2 lg:grid-cols-4 gap-4' }">
          <UPageCard
            v-for="stat in stats"
            :key="stat.value"
            variant="subtle"
            :ui="{
              root: 'ring-1 ring-primary/20 text-center',
              body: 'flex flex-col items-center gap-2 p-6',
            }"
          >
            <div class="text-4xl font-extrabold text-primary tracking-tight">
              {{ stat.value }}
            </div>
            <div class="text-sm text-muted text-center leading-snug">
              {{ stat.desc }}
            </div>
          </UPageCard>
        </UPageGrid>
      </UPageSection>

      <!-- AWS Services -->
      <UPageSection
        headline="Technical Stack"
        title="AWS Services"
        :ui="{ container: 'max-w-5xl', title: 'text-2xl font-bold' }"
      >
        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="svc in awsServices"
            :key="svc"
            :label="svc"
            color="primary"
            variant="subtle"
            size="md"
            icon="i-simple-icons-amazonaws"
          />
        </div>
      </UPageSection>

      <!-- Experience -->
      <UPageSection
        headline="Work History"
        title="Experience"
        :ui="{
          root: 'bg-elevated/30 py-12',
          container: 'max-w-5xl',
          title: 'text-2xl font-bold',
        }"
      >
        <UPageAccordion
          :items="jobItems"
          default-value="0"
          :ui="{ root: 'space-y-3' }"
        >
          <template #leading="{ item }">
            <UIcon :name="item.icon" class="size-5 text-primary" />
          </template>
          <template #body="{ item }">
            <div class="space-y-4 pb-2">
              <div class="flex flex-wrap gap-1.5">
                <UBadge
                  v-for="t in item.stack"
                  :key="t"
                  :label="t"
                  color="neutral"
                  variant="outline"
                  size="xs"
                />
              </div>
              <ul class="space-y-2">
                <li
                  v-for="b in item.bullets"
                  :key="b"
                  class="flex items-start gap-2 text-sm text-muted leading-relaxed"
                >
                  <UIcon
                    name="i-lucide-chevron-right"
                    class="size-4 text-primary mt-0.5 shrink-0"
                  />
                  {{ b }}
                </li>
              </ul>
            </div>
          </template>
        </UPageAccordion>
      </UPageSection>

      <!-- Featured Project -->
      <UPageSection
        id="projects"
        headline="Featured Project"
        title="Cloud Lakehouse Platform"
        description="A production cloud-native lakehouse architecture on AWS with distributed Spark pipelines and modular Terraform."
        :ui="{ container: 'max-w-5xl', title: 'text-2xl font-bold' }"
      >
        <UPageColumns>
          <UPageCard
            v-for="feature in projectFeatures"
            :key="feature.title"
            :icon="feature.icon"
            :title="feature.title"
            :description="feature.description"
            variant="subtle"
            :ui="{
              root: 'ring-1 ring-primary/10 hover:ring-primary/30 transition-all',
            }"
          />
        </UPageColumns>
      </UPageSection>

      <!-- Education + Awards -->
      <UPageSection
        :ui="{ root: 'bg-elevated/30 py-12', container: 'max-w-5xl' }"
      >
        <UPageGrid :ui="{ root: 'grid-cols-1 lg:grid-cols-2 gap-8' }">
          <!-- Education -->
          <div class="space-y-4">
            <div class="flex items-center gap-2 mb-4">
              <UIcon
                name="i-lucide-graduation-cap"
                class="size-5 text-primary"
              />
              <h2 class="text-xl font-bold text-highlighted">Education</h2>
            </div>
            <UCard variant="subtle" :ui="{ root: 'ring-1 ring-default' }">
              <template #header>
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <div class="font-bold text-highlighted">
                      B.Sc. Computer Science
                    </div>
                    <div class="text-sm text-muted">
                      Honours, Co-op · Memorial University of Newfoundland
                    </div>
                  </div>
                  <UBadge label="3.95 GPA" color="success" variant="subtle" />
                </div>
              </template>
              <div class="flex items-center justify-between text-sm">
                <span class="text-muted font-mono">Sep 2021 – May 2025</span>
                <span class="text-muted">COMP & MATH GPA 3.95 / 4.0</span>
              </div>
            </UCard>
          </div>

          <!-- Awards -->
          <div class="space-y-4">
            <div class="flex items-center gap-2 mb-4">
              <UIcon name="i-lucide-trophy" class="size-5 text-primary" />
              <h2 class="text-xl font-bold text-highlighted">Awards</h2>
            </div>
            <UCard
              v-for="award in awards"
              :key="award.title"
              variant="subtle"
              :ui="{ root: 'ring-1 ring-default', body: 'p-4 sm:p-4' }"
            >
              <div class="flex items-center gap-3">
                <UIcon
                  :name="award.icon"
                  class="size-5 text-primary shrink-0"
                />
                <div>
                  <div class="font-semibold text-sm text-highlighted">
                    {{ award.title }}
                  </div>
                  <div class="text-xs text-muted">{{ award.org }}</div>
                </div>
                <UBadge
                  v-if="award.badge"
                  :label="award.badge"
                  color="warning"
                  variant="subtle"
                  size="xs"
                  class="ml-auto"
                />
              </div>
            </UCard>
          </div>
        </UPageGrid>
      </UPageSection>

      <!-- Full Tech Stack -->
      <UPageSection
        headline="Tools & Languages"
        title="Full Technical Stack"
        :ui="{ container: 'max-w-5xl', title: 'text-2xl font-bold' }"
      >
        <UPageGrid
          :ui="{ root: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' }"
        >
          <UPageCard
            v-for="cat in techStack"
            :key="cat.label"
            :icon="cat.icon"
            :title="cat.label"
            variant="outline"
            :ui="{ root: 'hover:ring-primary/30 transition-all' }"
          >
            <template #description>
              <div class="flex flex-wrap gap-1.5 mt-2">
                <UBadge
                  v-for="t in cat.items"
                  :key="t"
                  :label="t"
                  color="neutral"
                  variant="subtle"
                  size="xs"
                />
              </div>
            </template>
          </UPageCard>
        </UPageGrid>
      </UPageSection>

      <!-- Contact CTA -->
      <UPageSection
        :ui="{
          root: 'bg-primary/5 border-t border-primary/20 py-16',
          container: 'max-w-5xl',
        }"
      >
        <div class="flex flex-col items-center gap-6 text-center">
          <UBadge
            icon="i-lucide-mail"
            label="Open to opportunities"
            color="primary"
            variant="subtle"
            size="lg"
          />
          <h2 class="text-3xl font-extrabold text-highlighted">
            Let's build something great
          </h2>
          <p class="text-muted max-w-md">
            Available for full-time roles in cloud platform engineering, data
            infrastructure, and backend development.
          </p>
          <div class="flex flex-wrap gap-3 justify-center">
            <UButton
              icon="i-lucide-mail"
              label="hluo@mun.ca"
              to="mailto:hluo@mun.ca"
              color="primary"
              size="lg"
            />
            <UButton
              icon="i-simple-icons-linkedin"
              label="LinkedIn"
              to="https://linkedin.com/in/HaomingLuo"
              target="_blank"
              color="neutral"
              variant="outline"
              size="lg"
            />
            <UButton
              icon="i-simple-icons-github"
              label="GitHub"
              to="https://github.com/JasonLuo2024"
              target="_blank"
              color="neutral"
              variant="outline"
              size="lg"
            />
          </div>
        </div>
      </UPageSection>
    </UMain>

    <UFooter :ui="{ root: 'border-t border-default', container: 'max-w-5xl' }">
      <template #left>
        <span class="text-sm text-muted"
          >© 2026 Haoming Luo · haomingluo.com</span
        >
      </template>
      <template #right>
        <UButton
          icon="i-simple-icons-linkedin"
          to="https://linkedin.com/in/HaomingLuo"
          target="_blank"
          color="neutral"
          variant="ghost"
          size="sm"
        />
        <UButton
          icon="i-simple-icons-github"
          to="https://github.com/JasonLuo2024"
          target="_blank"
          color="neutral"
          variant="ghost"
          size="sm"
        />
      </template>
    </UFooter>
  </UApp>
</template>

<script setup lang="ts">
const heroLinks = [
  {
    label: "View Projects",
    to: "#projects",
    icon: "i-lucide-folder",
    color: "primary" as const,
  },
  {
    label: "Contact Me",
    to: "mailto:hluo@mun.ca",
    icon: "i-lucide-mail",
    color: "neutral" as const,
    variant: "outline" as const,
  },
];

const certs = [
  {
    name: "Solutions Architect – Professional",
    code: "SAP-C02",
    expiry: "Mar 2029",
    level: "Professional",
  },
  {
    name: "Solutions Architect – Associate",
    code: "SAA-C03",
    expiry: "Feb 2029",
    level: "Associate",
  },
  {
    name: "Developer – Associate",
    code: "DVA-C02",
    expiry: "Jan 2029",
    level: "Associate",
  },
  {
    name: "Data Engineer – Associate",
    code: "DEA-C01",
    expiry: "Dec 2028",
    level: "Associate",
  },
];

const stats = [
  {
    value: "75–85%",
    desc: "AWS cost reduction via serverless re-architecture",
  },
  { value: "40×", desc: "Dataset size reduction via JSON → Parquet migration" },
  { value: "90%+", desc: "Processing time reduction through parallelism" },
  { value: "70%", desc: "API call reduction via IndexedDB caching" },
];

const awsServices = [
  "API Gateway",
  "Lambda",
  "Step Functions",
  "ECS Fargate",
  "S3",
  "SQS",
  "DynamoDB",
  "RDS",
  "IAM",
  "CloudWatch",
  "Cognito",
  "WAF",
  "ALB",
  "AWS SAM",
  "CloudFront",
];

const jobItems = [
  {
    label: "Software Developer · Angler Solutions Inc.",
    icon: "i-lucide-cloud",
    value: "0",
    description: "May 2024 – Present · Co-op → Part-Time → Full-Time",
    stack: [
      "AWS SAM",
      "API Gateway",
      "Lambda",
      "ECS Fargate",
      "S3",
      "SQS",
      "DynamoDB",
      "Cognito",
      "RDS",
      "Python",
      "FastAPI",
      "TypeScript",
      "Nuxt.js",
      "Docker",
    ],
    bullets: [
      "Designed scalable event-driven data ingestion pipelines on AWS (S3, SQS, Lambda, ECS Fargate, DynamoDB, RDS) to migrate and normalize large customer datasets into a production SaaS platform.",
      "Standardized serverless deployments using AWS SAM, defining Lambda and API Gateway as code across all environments.",
      "Led JSON → Parquet migration reducing dataset sizes by up to 40× and significantly improving query performance.",
      "Reduced AWS infrastructure costs by 75–85% by re-architecting always-on workloads into serverless pay-per-use systems.",
      "Designed AWS Cognito integration with JWT-based access control and role-based permissions for multi-user SaaS.",
      "Protected public endpoints using AWS WAF and ALB safeguards against DDoS and abusive traffic.",
      "Reduced end-to-end processing times 90%+ via parallel processing, pre-computed datasets, and CloudWatch monitoring.",
      "Implemented IndexedDB client-side caching reducing API calls by ~70%.",
    ],
  },
  {
    label: "ML Developer · Visual & Analytic Computing Lab",
    icon: "i-lucide-brain",
    value: "1",
    description: "Sep 2023 – Present · Contract → Volunteer",
    stack: ["PyTorch", "Python", "CUDA", "C++"],
    bullets: [
      "Reproduced CNN architectures from peer-reviewed research papers for breast cancer detection using mammography images.",
      "Guided student researchers in establishing GPU environments on CAIR, MUN's supercomputer.",
    ],
  },
  {
    label: "Research Assistant · Visual & Analytic Computing Lab",
    icon: "i-lucide-microscope",
    value: "2",
    description: "May 2023 – Sep 2023 · Contract Full-Time",
    stack: ["PyTorch", "Python", "CUDA", "C++", "MLflow"],
    bullets: [
      "Reduced model training time by ~90% via CUDA acceleration and batch processing.",
      "Used GANs to synthesize mammography images and address class imbalance in the training dataset.",
      "Tracked experiments with MLflow for model versioning and reproducibility.",
    ],
  },
];

const projectFeatures = [
  {
    icon: "i-lucide-layers",
    title: "Lakehouse Architecture",
    description:
      "Raw, processed, and curated S3 layers for scalable analytics workloads with clear data lineage.",
  },
  {
    icon: "i-lucide-zap",
    title: "Spark Pipelines",
    description:
      "Distributed CSV/JSON to Parquet transformation with columnar compression and partition pruning.",
  },
  {
    icon: "i-lucide-shield",
    title: "Terraform IaC",
    description:
      "Modular Terraform with S3 backend and DynamoDB state locking for safe concurrent deployments.",
  },
];

const awards = [
  {
    icon: "i-lucide-trophy",
    title: "Clean Energy Challenge NL — $50K Winner",
    org: "with Angler Solutions team",
    badge: "$50K",
  },
  {
    icon: "i-lucide-star",
    title: "Dean's List",
    org: "2022 & 2024",
    badge: null,
  },
  {
    icon: "i-lucide-flask-conical",
    title: "Science Undergraduate Research Award",
    org: "2023",
    badge: null,
  },
];

const techStack = [
  {
    label: "Cloud & Infra",
    icon: "i-lucide-cloud",
    items: ["AWS", "Terraform", "Docker", "AWS SAM", "CloudFront"],
  },
  {
    label: "Backend",
    icon: "i-lucide-server",
    items: ["Python", "FastAPI", "Java", "Node.js"],
  },
  {
    label: "Frontend",
    icon: "i-lucide-monitor",
    items: [
      "TypeScript",
      "Nuxt.js",
      "Vue.js",
      "React.js",
      "Tailwind CSS",
      "Nuxt UI",
    ],
  },
  {
    label: "Data & ML",
    icon: "i-lucide-database",
    items: [
      "PyTorch",
      "CUDA",
      "Apache Spark",
      "Parquet",
      "MLflow",
      "PostgreSQL",
    ],
  },
  {
    label: "Storage",
    icon: "i-lucide-hard-drive",
    items: ["S3", "DynamoDB", "RDS", "SQS", "IndexedDB"],
  },
  {
    label: "DevOps",
    icon: "i-lucide-git-branch",
    items: ["Git", "Selenium", "CloudWatch", "IAM"],
  },
];
</script>
