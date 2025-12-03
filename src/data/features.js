import { 
  Search, 
  Map, 
  Palette, 
  Code, 
  ShieldCheck, 
  Rocket,
  ArrowRight,
  Clock,
  Users,
  Star,
  Zap
} from "lucide-react";

export const bentoData = {
  primary: {
    title: "Central content area",
    description: "Use this to anchor your main message, product highlight, or hero visual. The surrounding tiles support this story.",
    // We can replace this with a more specific title for the project delivery context if needed, 
    // but keeping it generic as per the "Clean cards" image or adapting to "End-to-End Delivery".
    // Let's adapt it to the context.
    customTitle: "End-to-End Delivery",
    customDescription: "From concept to launch, we handle every step with precision. Our proven process ensures transparency, quality, and speed."
  },
  snapshot: {
    title: "SNAPSHOT",
    subtitle: "Quick metrics, states, or updates at a glance.",
    stats: [
      { label: "Projects", value: "20+", icon: Rocket },
      { label: "Hours", value: "50+", icon: Clock },
      { label: "Satisfaction", value: "97%", icon: Star },
      { label: "Team", value: "4", icon: Users }
    ]
  },
  node: {
    title: "NODE",
    subtitle: "Use for links, tags, or small details.",
    // Adapting to "Handy Extras"
    customTitle: "Handy Extras",
    customSubtitle: "Included in every stage",
    items: [
      "Weekly Updates",
      "Defined Revisions",
      "Direct Escalation",
      "Milestone Payments"
    ]
  },
  flow: {
    title: "FLOW",
    subtitle: "Stack small process steps here.",
    customTitle: "Process Flow",
    steps: [
      {
        id: 1,
        title: "Requirement Gathering",
        description: "We begin by fully understanding the client's goals, challenges, and expected outcomes.",
        example: "Collect business details, scope, target audience, timelines."
      },
      {
        id: 2,
        title: "Strategy & Planning",
        description: "We turn requirements into a structured plan.",
        example: "Create roadmap, define tools/tech, outline deliverables."
      },
      {
        id: 3,
        title: "Proposal & Agreement",
        description: "We document everything in a transparent proposal.",
        example: "Pricing, timelines, features, responsibilities, milestones."
      },
      {
        id: 4,
        title: "Design Phase",
        description: "We convert ideas into visual concepts.",
        example: "Wireframes, UI design, brand assets, user flow."
      },
      {
        id: 5,
        title: "Development / Implementation",
        description: "We build the actual solution based on the approved design.",
        example: "Coding, integrations, automation setup, backend logic."
      },
      {
        id: 6,
        title: "Testing & Quality Assurance",
        description: "We check everything before delivery.",
        example: "Functionality tests, performance checks, bug fixes."
      },
      {
        id: 7,
        title: "Review & Revisions",
        description: "We share the completed work and take client feedback.",
        example: "Implement design tweaks or minor feature adjustments."
      },
      {
        id: 8,
        title: "Final Delivery",
        description: "We hand over the project with complete assets and documentation.",
        example: "Live website launch, admin access, login credentials."
      },
      {
        id: 9,
        title: "Training & Support (Optional)",
        description: "We give guidance on managing or using the delivered solution.",
        example: "Tutorials, maintenance support, monthly updates."
      }
    ]
  },
  summary: {
    title: "SUMMARY STRIP",
    subtitle: "Perfect for a compact call-to-action or a one-line value proposition.",
    customTitle: "Quick Overview",
    customSubtitle: "Requirement Gathering → Strategy & Planning → Proposal & Agreement → Design Phase → Development → Testing & QA → Review & Revisions → Final Delivery → Training & Support",
    cta: "GET STARTED"
  }
};
