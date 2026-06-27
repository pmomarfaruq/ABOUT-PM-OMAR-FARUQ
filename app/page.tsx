'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  TrendingUp,
  Lightbulb,
  Rocket,
  Youtube,
  Linkedin,
  Twitter,
  Mail,
  ChevronUp,
  GraduationCap,
  Target,
  Eye,
  Brain,
  Share2,
  BarChart3,
  FileText,
  DollarSign,
  Users,
  ExternalLink,
  Quote,
  Shield,
} from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pmomarfaruq',
    icon: Linkedin,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@Law_Of_Money',
    icon: Youtube,
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/pmomarfaruq',
    icon: Twitter,
  },
  {
    name: 'Whop',
    href: 'https://whop.com/@pmomarfaruq/',
    icon: ExternalLink,
  },
];

const expertise = [
  {
    icon: BarChart3,
    title: 'Investment Research',
    description:
      'Understanding businesses through fundamental analysis, financial statements, and valuation.',
  },
  {
    icon: TrendingUp,
    title: 'Stock Market Education',
    description:
      'Breaking down complex market concepts into practical lessons for beginners and experienced investors alike.',
  },
  {
    icon: DollarSign,
    title: 'Financial Literacy',
    description:
      'Promoting responsible money management, wealth creation, and long-term investing.',
  },
  {
    icon: Rocket,
    title: 'Entrepreneurship',
    description:
      'Exploring innovative ideas, digital businesses, and sustainable business strategies.',
  },
  {
    icon: FileText,
    title: 'Digital Content Creation',
    description:
      'Creating educational articles, presentations, videos, and online resources focused on finance and investing.',
  },
];

const coreValues = [
  { icon: Shield, label: 'Integrity' },
  { icon: Brain, label: 'Continuous Learning' },
  { icon: Target, label: 'Discipline' },
  { icon: Lightbulb, label: 'Innovation' },
  { icon: Eye, label: 'Long-Term Thinking' },
  { icon: Share2, label: 'Knowledge Sharing' },
];

const featuredTopics = [
  'Fundamental Analysis',
  'Value Investing',
  'Company Research',
  'Financial Statements',
  'Stock Selection Frameworks',
  'Investment Strategies',
  'Business Analysis',
  'Economic Concepts',
];

const whyFollow = [
  'Practical and easy-to-understand financial education',
  'Research-driven investment insights',
  'Long-term investing philosophy',
  'Business-focused analysis',
  'Educational presentations and resources',
  'Continuous learning mindset',
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-playfair text-xl font-bold text-primary">
            PM Omar Faruq
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#expertise"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Expertise
            </a>
            <a
              href="#work"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </a>
            <a
              href="#ventures"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Ventures
            </a>
            <a
              href="#connect"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Connect
            </a>
          </div>
          <Button variant="outline" size="sm" className="hidden sm:flex" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5" />
        <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-gold/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
                  Investor • Financial Educator • Entrepreneur • Digital Creator
                </Badge>
              </div>

              <h1
                className={`font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight transition-all duration-1000 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <span className="text-primary">PM Omar</span>
                <br />
                <span className="text-gold">Faruq</span>
              </h1>

              <p
                className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed transition-all duration-1000 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                With a strong passion for finance, investing, entrepreneurship, and
                lifelong learning, I focus on simplifying complex financial concepts
                and sharing practical insights that help people make informed decisions.
              </p>

              <div
                className={`flex flex-col sm:flex-row gap-4 mb-10 transition-all duration-1000 delay-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <Button size="lg" className="gap-2" asChild>
                  <a href="#about">
                    <GraduationCap className="w-5 h-5" />
                    Learn More
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href="#connect">
                    <Users className="w-5 h-5" />
                    Connect With Me
                  </a>
                </Button>
              </div>

              <div
                className={`flex items-center gap-4 transition-all duration-1000 delay-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card border border-border hover:border-gold hover:text-gold transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Portrait Photo */}
            <div
              className={`order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="relative flex items-center justify-center">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/40 via-gold/20 to-transparent blur-2xl scale-110" />
                {/* Gold border ring */}
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-gold via-gold/60 to-gold/30" />
                {/* Image circle */}
                <div className="relative rounded-full overflow-hidden w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] shadow-2xl bg-primary">
                  <img
                    src="/images/hero/PM_OMAR_FARUQ_1.JPG"
                    alt="PM Omar Faruq"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-foreground">
            <ChevronUp className="w-6 h-6 rotate-180" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                About Me
              </Badge>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                Every Great Journey Begins with{' '}
                <span className="text-gold">Curiosity</span>
              </h2>
              <div className="divider-gold mx-auto" />
            </div>

            <div className="relative p-8 md:p-12 bg-background rounded-2xl border border-border shadow-lg">
              <Quote className="absolute top-6 left-6 w-10 h-10 text-gold/30" />

              <div className="relative z-10 space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  My interest in finance, economics, and investing has grown
                  through continuous learning, reading, research, and practical
                  experience. I believe financial literacy is one of the most
                  valuable life skills, and I am committed to making it
                  accessible to everyone.
                </p>

                <p>
                  Over the years, I have explored topics ranging from
                  fundamental stock analysis and business valuation to
                  entrepreneurship, digital media, and personal development. By
                  sharing insights through educational content and online
                  platforms, I aim to help students, aspiring investors, and
                  professionals develop a deeper understanding of the financial
                  world.
                </p>
              </div>

              <div className="mt-10 p-6 bg-primary rounded-xl text-primary-foreground">
                <p className="font-playfair text-xl md:text-2xl font-semibold text-center">
                  Learn continuously. Think independently. Invest wisely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <Card className="border-gold/20 hover:border-gold/40 transition-all duration-500 group">
              <CardContent className="p-8 md:p-10">
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <Target className="w-8 h-8 text-gold" />
                </div>
                <Badge variant="secondary" className="mb-4">
                  My Mission
                </Badge>
                <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
                  Educate. Inspire. Empower.
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To educate, inspire, and empower people with practical
                  financial knowledge that helps them make smarter investment
                  decisions and create lasting value.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-accent/20 hover:border-accent/40 transition-all duration-500 group">
              <CardContent className="p-8 md:p-10">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <Badge variant="secondary" className="mb-4">
                  My Vision
                </Badge>
                <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
                  A Trusted Voice in Finance
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To become a trusted voice in financial education by promoting
                  informed investing, disciplined decision-making, and
                  continuous personal growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section
        id="expertise"
        className="section-padding bg-gradient-to-b from-background via-card/30 to-background"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Expertise
            </Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Areas of <span className="text-accent">Expertise</span>
            </h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {expertise.map((item, index) => (
              <Card
                key={item.title}
                className={`card-hover bg-card/80 backdrop-blur-sm border-border/50 hover:border-gold/30 ${
                  index === 4 ? 'lg:col-start-2' : ''
                }`}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
            >
              Core Values
            </Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Principles I <span className="text-gold">Live By</span>
            </h2>
            <div className="w-[60px] h-[3px] bg-gold mx-auto rounded-[2px]" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {coreValues.map((value) => (
              <div
                key={value.label}
                className="group text-center p-6 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <p className="font-medium text-sm">{value.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Featured Work
            </Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Educational <span className="text-gold">Resources</span>
            </h2>
            <div className="divider-gold mx-auto" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Explore educational resources covering various aspects of
              financial education and investment research.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {featuredTopics.map((topic) => (
              <div
                key={topic}
                className="p-4 rounded-lg border border-border bg-card/50 hover:border-gold/50 hover:bg-card transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold group-hover:scale-150 transition-transform" />
                  <span className="text-sm font-medium">{topic}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              More educational content is added regularly.
            </p>
            <Button asChild>
              <a
                href="https://www.youtube.com/@Law_Of_Money"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-4 h-4 mr-2" />
                Watch on YouTube
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Follow Section */}
      <section className="section-padding bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                Why Follow
              </Badge>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold">
                Why Follow My <span className="text-accent">Work</span>?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {whyFollow.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-gold/30 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-sm font-bold">
                      ✓
                    </span>
                  </div>
                  <span className="font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section id="ventures" className="section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              My Ventures
            </Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Companies &amp; <span className="text-gold">Projects</span>
            </h2>
            <div className="divider-gold mx-auto" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Under FQ Orbyx Ventures, I build and lead companies across finance,
              technology, and education — each driven by a mission to create real impact.
            </p>
          </div>

          {/* Portfolio Banner */}
          <div className="max-w-5xl mx-auto mb-12 rounded-2xl overflow-hidden border border-gold/20 shadow-xl">
            <img
              src="/images/gallery/BANNER_PORTFOLIO.JPG"
              alt="FQ Orbyx Ventures — Portfolio Banner"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Company Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Fluxora */}
            <div className="group rounded-2xl overflow-hidden border border-border hover:border-gold/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-square overflow-hidden bg-black">
                <img
                  src="/images/gallery/FLUXORA.JPG"
                  alt="Fluxora — Digital Products. Limitless Possibilities."
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-playfair font-bold text-lg mb-1">Fluxora</h3>
                <p className="text-muted-foreground text-sm">Tech Innovation</p>
                <p className="text-xs text-muted-foreground/70 mt-2">Building smart solutions. Powering the future.</p>
              </div>
            </div>

            {/* Law of Money */}
            <div className="group rounded-2xl overflow-hidden border border-border hover:border-gold/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-square overflow-hidden bg-black">
                <img
                  src="/images/gallery/LAW_OF_MONEY.JPG"
                  alt="Law of Money — Investing & Trading"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-playfair font-bold text-lg mb-1">Law of Money</h3>
                <p className="text-muted-foreground text-sm">Finance</p>
                <p className="text-xs text-muted-foreground/70 mt-2">Master money. Build freedom. Create generational wealth.</p>
              </div>
            </div>

            {/* Edunova */}
            <div className="group rounded-2xl overflow-hidden border border-border hover:border-gold/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-square overflow-hidden bg-white">
                <img
                  src="/images/gallery/EDUNOVA.JPG"
                  alt="Edunova — Breaking Barriers. Reimagining Education."
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-playfair font-bold text-lg mb-1">Edunova</h3>
                <p className="text-muted-foreground text-sm">Education</p>
                <p className="text-xs text-muted-foreground/70 mt-2">Breaking barriers. Reimagining education.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Teaser */}
      <section className="section-padding bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">
              Stay Updated
            </Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Latest <span className="text-accent">Updates</span>
            </h2>
            <div className="divider-gold mx-auto" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto mb-8">
              Stay updated with my newest articles, investment research,
              educational content, presentations, and digital projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  asChild
                  className="hover:border-gold hover:text-gold"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-4 h-4 mr-2" />
                    {social.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Connect
            </Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Connect <span className="text-gold">With Me</span>
            </h2>
            <div className="divider-gold mx-auto" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Follow my journey across platforms for educational content,
              updates, and insights.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-gold/20 group-hover:to-gold/10 transition-all">
                  <social.icon className="w-7 h-7 group-hover:text-gold transition-colors" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{social.name}</h3>
                <p className="text-muted-foreground text-sm">
                  @{social.name === 'X (Twitter)' ? 'pmomarfaruq' : social.name === 'YouTube' ? 'Law_Of_Money' : 'pmomarfaruq'}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
            >
              Contact
            </Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              I'd Love to Hear <span className="text-gold">From You</span>
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Whether you have a collaboration proposal, business inquiry,
              speaking opportunity, or simply want to connect, feel free to reach
              out.
            </p>

            <a
              href="mailto:pmomarfaruqn@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary rounded-xl font-semibold hover:bg-gold/90 transition-colors group"
            >
              <Mail className="w-5 h-5" />
              <span>pmomarfaruqn@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-playfair text-xl font-bold text-primary mb-2">
                PM Omar Faruq
              </h3>
              <p className="text-muted-foreground text-sm">
                Investor • Financial Educator • Entrepreneur • Digital Creator
              </p>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-card border border-border hover:border-gold hover:text-gold transition-colors text-muted-foreground"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <Separator className="my-8" />

          <div className="text-center text-muted-foreground text-sm">
            <p>
              <a
                href="mailto:pmomarfaruqn@gmail.com"
                className="hover:text-foreground transition-colors"
              >
                pmomarfaruqn@gmail.com
              </a>
            </p>
            <p className="mt-2">© 2026 PM Omar Faruq. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-gold text-primary shadow-lg hover:bg-gold/90 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
