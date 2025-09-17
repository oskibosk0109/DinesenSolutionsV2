"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  Building,
  MessageSquare,
  Calendar,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Globe,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const projectTypes = [
    "Hjemmeside",
    "Webapplikation",
    "E-commerce",
    "AI-integration",
    "API-udvikling",
    "Migrering",
    "Andet",
  ];

  const budgetRanges = [
    "Under 10.000 kr",
    "10.000 - 25.000 kr",
    "25.000 - 50.000 kr",
    "50.000 - 100.000 kr",
    "Over 100.000 kr",
  ];

  const timelines = [
    "ASAP",
    "Inden for 1 måned",
    "1-3 måneder",
    "3-6 måneder",
    "Fleksibel",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Telefon",
      value: "+45 12 34 56 78",
      link: "tel:+4512345678",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "kontakt@dinesensolutions.dk",
      link: "mailto:kontakt@dinesensolutions.dk",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Lokation",
      value: "København, Danmark",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send en besked</CardTitle>
                <CardDescription>
                  Udfyld formularen, så vender jeg tilbage hurtigst muligt
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="basic" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="basic">Grundlæggende</TabsTrigger>
                    <TabsTrigger value="detailed">Detaljeret</TabsTrigger>
                  </TabsList>

                  <TabsContent value="basic">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">
                            <User className="inline h-4 w-4 mr-1" />
                            Navn *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Dit fulde navn"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            <Mail className="inline h-4 w-4 mr-1" />
                            Email *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="din@email.dk"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">
                            <Phone className="inline h-4 w-4 mr-1" />
                            Telefon
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+45 12 34 56 78"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">
                            <Building className="inline h-4 w-4 mr-1" />
                            Virksomhed
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Virksomhedsnavn"
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">
                          <MessageSquare className="inline h-4 w-4 mr-1" />
                          Besked *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Fortæl mig om dit projekt..."
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Send className="mr-2 h-4 w-4" />
                        Send besked
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="detailed">
                    <ScrollArea className="h-[600px] pr-4">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name-detailed">
                              <User className="inline h-4 w-4 mr-1" />
                              Navn *
                            </Label>
                            <Input
                              id="name-detailed"
                              name="name"
                              placeholder="Dit fulde navn"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email-detailed">
                              <Mail className="inline h-4 w-4 mr-1" />
                              Email *
                            </Label>
                            <Input
                              id="email-detailed"
                              name="email"
                              type="email"
                              placeholder="din@email.dk"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone-detailed">
                              <Phone className="inline h-4 w-4 mr-1" />
                              Telefon
                            </Label>
                            <Input
                              id="phone-detailed"
                              name="phone"
                              type="tel"
                              placeholder="+45 12 34 56 78"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company-detailed">
                              <Building className="inline h-4 w-4 mr-1" />
                              Virksomhed
                            </Label>
                            <Input
                              id="company-detailed"
                              name="company"
                              placeholder="Virksomhedsnavn"
                              value={formData.company}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <Separator />

                        <div className="space-y-2">
                          <Label>
                            <Briefcase className="inline h-4 w-4 mr-1" />
                            Projekt type
                          </Label>
                          <div className="flex flex-wrap gap-2">
                            {projectTypes.map((type) => (
                              <Badge
                                key={type}
                                variant={formData.projectType === type ? "default" : "outline"}
                                className="cursor-pointer"
                                onClick={() => setFormData({ ...formData, projectType: type })}
                              >
                                {type}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>
                            <DollarSign className="inline h-4 w-4 mr-1" />
                            Budget
                          </Label>
                          <div className="flex flex-wrap gap-2">
                            {budgetRanges.map((range) => (
                              <Badge
                                key={range}
                                variant={formData.budget === range ? "default" : "outline"}
                                className="cursor-pointer"
                                onClick={() => setFormData({ ...formData, budget: range })}
                              >
                                {range}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>
                            <Calendar className="inline h-4 w-4 mr-1" />
                            Tidslinje
                          </Label>
                          <div className="flex flex-wrap gap-2">
                            {timelines.map((timeline) => (
                              <Badge
                                key={timeline}
                                variant={formData.timeline === timeline ? "default" : "outline"}
                                className="cursor-pointer"
                                onClick={() => setFormData({ ...formData, timeline })}
                              >
                                {timeline}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Separator />

                        <div className="space-y-2">
                          <Label htmlFor="message-detailed">
                            <MessageSquare className="inline h-4 w-4 mr-1" />
                            Projekt beskrivelse *
                          </Label>
                          <Textarea
                            id="message-detailed"
                            name="message"
                            placeholder="Beskriv dit projekt i detaljer..."
                            rows={8}
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full">
                          <Send className="mr-2 h-4 w-4" />
                          Send detaljeret forespørgsel
                        </Button>
                      </form>
                    </ScrollArea>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Kontakt information</CardTitle>
                <CardDescription>
                  Du er altid velkommen til at kontakte mig direkte
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 bg-beige rounded-full text-primary">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle>Hvad sker der nu?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { step: "1", text: "Du sender din forespørgsel" },
                    { step: "2", text: "Jeg svarer inden for 2-4 timer" },
                    { step: "3", text: "Vi aftaler et gratis møde" },
                    { step: "4", text: "Du får et skræddersyet tilbud" },
                    { step: "5", text: "Vi starter dit projekt" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Badge variant="default" className="h-8 w-8 rounded-full p-0 flex items-center justify-center">
                        {item.step}
                      </Badge>
                      <p className="text-sm">{item.text}</p>
                      {index === 0 && <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Globe className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Online møder</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Jeg tilbyder online konsultation via Teams, Zoom eller Google Meet
                </p>
                <Button variant="outline" className="w-full">
                  Book online møde
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DollarSign(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}