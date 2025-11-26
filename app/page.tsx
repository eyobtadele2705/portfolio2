"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Shield,
  Wrench,
  TestTube,
  Briefcase,
  User,
  FolderOpen,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  Star,
  Monitor,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: "home", label: "Home", icon: User },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "contact", label: "Contact", icon: MessageCircle },
  ]

  const skills = {
    languages: ["Java", "Javascript", "C++", "Python"],
    frameworks: ["Spring Boot", "React", "Angular", "Spring Cloud", "FastAPI", "NextJS"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "CockroachDB", "Cassandra"],
    tools: ["Docker", "Kubernetes", "Jenkins", "Git", "GitHub Actions"],
    testing: ["Selenium", "JUnit", "Functional Testing"],
    monitoring: ["ELK Stack", "Grafana", "Prometheus", "Loki", "Grafana Alloy"],
  }

  const projects = [
    {
      title: "Issuer App",
      description:
        "Full stack application built with Spring Boot and Flutter for mobile. Features include user authentication, card issuing, card registration, transaction logs, transaction management and integration with jcard system and payment integration.",
      technologies: ["Spring Boot", "Flutter", "PostgreSQL", "Docker"],
      image: "/mobile-banking-card-issuer-system.jpg",
      github: "",
      demo: "#",
      featured: true,
    },
    {
      title: "One Platform APP",
      description:
        "Backend application for Sales and Distribution Department. Includes user management, user onboarding, inventory management that interacts with different third-party systems across different regions and sites.",
      technologies: ["Spring Boot", "PostgreSQL", "REST APIs", "Microservices"],
      image: "/sales-distribution-inventory-system.jpg",
      github: "",
      demo: "#",
      featured: true,
    },
    {
      title: "API Testing Framework",
      description: "Automated testing framework for REST APIs with comprehensive reporting and CI/CD integration.",
      technologies: ["Java", "Selenium", "Jenkins", "Docker", "Robot"],
      image: "/api-testing-automation-framework.jpg",
      github: "",
      demo: "#",
      featured: false,
    },
    {
      title: "API Integration",
      description:
        "Integration of various APIs for payment processing, and third-party services in a financial application. Ensured seamless data flow and security compliance.",
      technologies: ["Spring Boot", "PostgreSQL", "Maven"],
      image: "/payment-processing-api-integration.jpg",
      github: "",
      demo: "#",
      featured: false,
    },
  ]

  const experiences = [
    {
      title: "Spring Boot Developer",
      company: "Safaricom Ethiopia",
      period: "August 2025 - Present",
      location: "Addis Ababa",
      description: [
        "Developing fast and reliable backend service for Sales and Distribution Department",
        "Ensuring Microservices stability and security",
        "Third party API Integrations for SOAP API and REST APIs",
        "Payment Integration",
        "Containerization and setting up CI/CD pipeline",
        "API Documentation using Swagger OpenAPI",
      ],
      icon: Code,
    },
    {
      title: "Full Stack Web Developer",
      company: "Flocash",
      period: "October 2022 - Present",
      location: "Addis Ababa, Ethiopia",
      description: [
        "Designed and developed robust RESTful and SOAP APIs",
        "Implemented API security using OAuth and SAML",
        "Used Java Spring Boot and Angular, React for full-stack development",
        "Orchestrated containers using Kubernetes and Docker",
        "Contributed to CI/CD pipelines with Jenkins and SonarQube",
        "Documented APIs using Swagger and OpenAPI",
        "Worked with PostgreSQL, MySQL, Oracle, and MongoDB",
        "Payment integration with different domestic and international gateways",
      ],
      icon: Briefcase,
    },
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              Eyob<span className="text-purple-400">.</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? "text-purple-400 bg-purple-400/10"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? "text-purple-400 bg-purple-400/10"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <Avatar className="w-32 h-32 mx-auto mb-8 border-4 border-purple-400">
            <AvatarImage src="/eyob-profile.jpg" alt="Eyob Tadele" />
            <AvatarFallback className="text-2xl bg-purple-600">ET</AvatarFallback>
          </Avatar>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Eyob</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Full-Stack Developer from Ethiopia, crafting robust applications and ensuring exceptional
            software quality with modern technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Github className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Mail className="w-6 h-6" />
            </Button>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

        <section id="about" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-16">
                    About <span className="text-purple-400">Me</span>
                </h2>

                <div className="grid md:grid-cols-1 gap-12 items-center">
                    <div>
                        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-4">Software Engineer</h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Results-driven Software Developer with over three years of experience in financial technology.
                                    Proficient in Java Spring Boot and Angular for frontend development, with a strong background in
                                    software quality assurance.
                                </p>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Currently working as a Backend Engineer at Safaricom Ethiopia, where I give priority to security, performance,
                                    and scalability in all my projects. Passionate about learning new technologies and continuously improving my skills to deliver.
                                </p>
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        Addis Ababa, Ethiopia
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        eyobtadele2705@gmail.com
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Technical <span className="text-purple-400">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-400/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800 font-bold">
                  <Code className="w-5 h-5 text-purple-400" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {skills.languages.map((skill) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-gray-800 font-medium">{skill}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-purple-400 text-purple-400" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-blue-400/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800 font-bold">
                  <Wrench className="w-5 h-5 text-blue-400" />
                  Frameworks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {skills.frameworks.map((skill) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-gray-800 font-medium">{skill}</span>
                      <div className="flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-400/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800 font-bold">
                  <Database className="w-5 h-5 text-green-400" />
                  Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {skills.databases.map((skill) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-gray-800 font-medium">{skill}</span>
                      <div className="flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-green-400 text-green-400" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border-orange-400/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800 font-bold">
                  <Shield className="w-5 h-5 text-orange-400" />
                  DevOps & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {skills.tools.map((skill) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-gray-800 font-medium">{skill}</span>
                      <div className="flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-600/20 to-rose-600/20 border-pink-400/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800 font-bold">
                  <TestTube className="w-5 h-5 text-pink-400" />
                  Testing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {skills.testing.map((skill) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-gray-800 font-medium">{skill}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-pink-400 text-pink-400" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-600/20 to-violet-600/20 border-indigo-400/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800 font-bold">
                  <Monitor className="w-5 h-5 text-indigo-400" />
                  Monitoring & Logs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {skills.monitoring.map((skill) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-gray-800 font-medium">{skill}</span>
                      <div className="flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-indigo-400 text-indigo-400" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Featured <span className="text-purple-400">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-purple-400/20 text-purple-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                        onClick={() => window.open(project.github, "_blank")}
                        disabled={project.github === "#"}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      {project.demo !== "#" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-purple-400/50 text-purple-300 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-purple-400 hover:text-white p-2"
                        onClick={() => window.open(project.github, "_blank")}
                        disabled={project.github === "#"}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-purple-400 hover:text-white p-2">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Work <span className="text-purple-400">Experience</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-white">{exp.title}</CardTitle>
                  <p className="text-purple-400 font-semibold">{exp.company}</p>
                  <p className="text-sm text-gray-400">{exp.period}</p>
                  <p className="text-sm text-gray-400 flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4" /> {exp.location}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex gap-3">
                        <span className="text-purple-400 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Let's Work <span className="text-purple-400">Together</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-gray-300 text-sm">eyobtadele2705@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-gray-300 text-sm">+251913561981</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Location</h3>
                <p className="text-gray-300 text-sm">Addis Ababa, Ethiopia</p>
              </CardContent>
            </Card>
          </div>

          <Button
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg"
            onClick={() => window.open("mailto:eyobtadele2705@gmail.com")}
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Eyob Tadele. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
