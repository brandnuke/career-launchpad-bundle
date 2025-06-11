
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Clock, Users, FileText, BookOpen, Calendar, Trophy, Star, ArrowRight, Zap, Shield, Target, Play, ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 sm:py-16 md:py-24 px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-indigo-400/10 to-pink-400/10 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl text-center relative z-10">
          <div className="animate-fade-in">
            <Badge className="mb-6 sm:mb-8 bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-bold shadow-xl animate-scale-in rounded-full">
              🔥 86% OFF - LIMITED TIME ONLY
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 sm:mb-8 md:mb-10 leading-tight tracking-tight px-2">
              Master Project Management
            </h1>
            
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-6 sm:mb-8 px-2">
              Get 5 Top Courses for Only $94
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-5xl mx-auto leading-relaxed font-medium px-4">
              Transform your career with expert-led training for PMP®, PMI-SP®, PRINCE2®, CBAP®, PMI-RMP® exams. 
              <br className="hidden sm:block" />
              <span className="text-blue-600 font-bold">Lifetime access • Risk-free • Career-boosting</span>
            </p>
            
            <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row justify-center items-center mb-12 sm:mb-16 px-4">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-scale-in rounded-2xl group w-full sm:w-auto">
                <Play className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                <span className="text-center">Get Instant Access for $94</span>
                <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="text-center animate-fade-in delay-300 bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl w-full sm:w-auto">
                <p className="text-lg sm:text-xl text-gray-500 line-through mb-2">Regular Price: $928</p>
                <p className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">You Save: $834</p>
                <p className="text-sm text-gray-600 font-medium">One-time payment • No subscription</p>
              </div>
            </div>

            {/* Enhanced trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto animate-fade-in delay-500 px-4">
              <div className="flex items-center justify-center gap-3 bg-white/90 backdrop-blur-md rounded-2xl px-4 sm:px-8 py-4 sm:py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex text-yellow-400 text-lg sm:text-xl">
                  {'★'.repeat(5)}
                </div>
                <div className="text-left">
                  <div className="text-base sm:text-lg font-bold">4.8/5 Rating</div>
                  <div className="text-xs sm:text-sm text-gray-600">Based on 1,200+ reviews</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 bg-white/90 backdrop-blur-md rounded-2xl px-4 sm:px-8 py-4 sm:py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                <div className="text-left">
                  <div className="text-base sm:text-lg font-bold">3,786+ Students</div>
                  <div className="text-xs sm:text-sm text-gray-600">Successfully certified</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 bg-white/90 backdrop-blur-md rounded-2xl px-4 sm:px-8 py-4 sm:py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                <div className="text-left">
                  <div className="text-base sm:text-lg font-bold">7-Day Guarantee</div>
                  <div className="text-xs sm:text-sm text-gray-600">100% money back</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 sm:py-16 px-4 bg-white relative">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 animate-fade-in">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                text: "Excellent training content. Helped me pass my PMP exam on the first try! The practice tests were incredibly helpful.",
                author: "Sarah M., Project Manager",
                company: "Microsoft"
              },
              {
                text: "Great value for money. All courses are comprehensive and well-structured. Best investment I've made for my career.",
                author: "Michael R., IT Professional", 
                company: "Amazon"
              },
              {
                text: "Lifetime access is amazing. I can revisit materials whenever needed. The instructors are world-class.",
                author: "Lisa K., Business Analyst",
                company: "Google"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="text-left hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex text-yellow-400 mb-4 text-base sm:text-lg">{'★'.repeat(5)}</div>
                  <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.author}</p>
                    <p className="text-xs sm:text-sm text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">Complete Training Bundle</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              5 Industry-Leading Certifications
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Everything you need to become a certified project management professional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
            {[
              {
                title: "PMP® Certification Training",
                description: "120 Lessons, 49 hours",
                icon: Trophy,
                popular: true,
                features: ["Complete PMP exam prep", "5 practice tests included", "Certificate of completion", "35 PDUs included"],
                color: "from-blue-500 to-indigo-600"
              },
              {
                title: "PMI-SP® Certification Training", 
                description: "46 Lessons, 22 hours",
                icon: Calendar,
                features: ["Scheduling Professional prep", "5 practice tests included", "Certificate of completion", "Real-world case studies"],
                color: "from-green-500 to-emerald-600"
              },
              {
                title: "PRINCE2® Foundation & Practitioner",
                description: "46 Lessons, 21 hours", 
                icon: BookOpen,
                features: ["Both Foundation & Practitioner", "5 practice tests included", "Certificate of completion", "UK methodology focus"],
                color: "from-purple-500 to-violet-600"
              },
              {
                title: "CBAP® Business Analysis Training",
                description: "61 Lessons, 29 hours",
                icon: Target,
                features: ["Complete business analysis prep", "5 practice tests included", "Certificate of completion", "BABOK® Guide alignment"],
                color: "from-orange-500 to-red-600"
              },
              {
                title: "PMI-RMP® Risk Management Training",
                description: "16 Lessons, 8 hours",
                icon: Shield,
                features: ["Risk management professional prep", "5 practice tests included", "Certificate of completion", "Advanced risk techniques"],
                color: "from-teal-500 to-cyan-600"
              },
              {
                title: "Bonus: Premium Support",
                description: "Lifetime access included",
                icon: Zap,
                bonus: true,
                features: ["24/7 expert support", "Mobile + desktop access", "Lifetime updates", "Priority assistance"],
                color: "from-pink-500 to-rose-600"
              }
            ].map((course, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in group ${course.bonus ? 'bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200' : 'bg-white'}`} style={{ animationDelay: `${index * 150}ms` }}>
                {course.popular && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 sm:px-3 py-1 text-xs font-bold shadow-lg">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${course.color} p-3 sm:p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <course.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold">{course.title}</CardTitle>
                  <CardDescription className="text-base sm:text-lg font-medium text-gray-600">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 sm:space-y-3">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 sm:gap-3">
                        <Check className={`w-4 h-4 sm:w-5 sm:h-5 ${course.bonus ? 'text-pink-600' : 'text-green-500'}`} />
                        <span className="text-xs sm:text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16 animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              Start Your Journey Today
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Why Choose Our Bundle?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Everything you need to succeed in project management
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Clock,
                title: "Lifetime Access",
                description: "Learn at your own pace with permanent access to all materials and future updates",
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: Users,
                title: "Expert Instructors", 
                description: "Learn from industry professionals with real-world experience and proven track records",
                color: "bg-green-100 text-green-600"
              },
              {
                icon: Trophy,
                title: "Industry Certifications",
                description: "Designed to prepare you for globally recognized certifications that employers value",
                color: "bg-purple-100 text-purple-600"
              },
              {
                icon: FileText,
                title: "Practice Tests",
                description: "25+ comprehensive practice tests to ensure you're ready for the real exams",
                color: "bg-orange-100 text-orange-600"
              },
              {
                icon: Shield,
                title: "24/7 Support",
                description: "Get help whenever you need it with round-the-clock expert assistance",
                color: "bg-red-100 text-red-600"
              },
              {
                icon: Zap,
                title: "Money-Back Guarantee",
                description: "7-day no-questions-asked guarantee — completely risk-free investment",
                color: "bg-yellow-100 text-yellow-600"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in px-4" style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`w-16 h-16 sm:w-20 sm:h-20 ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <benefit.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Perfect For</h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Whether you're starting out or advancing your career
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              "Project managers & team leaders",
              "Aspiring project managers", 
              "Business analysts",
              "Consultants & quality professionals",
              "IT professionals",
              "Corporate teams & L&D managers"
            ].map((audience, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-white border-0 shadow-lg" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Check className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <p className="text-base sm:text-lg font-semibold text-gray-800">{audience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12 animate-fade-in">
            <Badge variant="outline" className="text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 bg-white border-2 border-green-200 text-green-700 font-semibold">
              ✅ No prior certification required — all levels welcome!
            </Badge>
          </div>
        </div>
      </section>

      {/* How It Works Section - Modernized */}
      <section className="py-20 sm:py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-full shadow-lg">
              Simple Process
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent px-4">
              How It Works
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
              Get started in minutes and become certified in months
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              { 
                step: "01", 
                title: "Enroll Instantly", 
                description: "One-click enrollment with immediate access to all 5 premium courses and materials", 
                icon: Zap,
                color: "from-blue-500 to-cyan-500"
              },
              { 
                step: "02", 
                title: "Learn Flexibly", 
                description: "Study on any device, anywhere, anytime with our mobile-optimized platform", 
                icon: BookOpen,
                color: "from-green-500 to-emerald-500"
              },
              { 
                step: "03", 
                title: "Practice & Master", 
                description: "Use 25+ practice tests and real-world scenarios to master every concept", 
                icon: Target,
                color: "from-purple-500 to-violet-500"
              },
              { 
                step: "04", 
                title: "Get Certified", 
                description: "Earn completion certificates and prepare for official certification exams", 
                icon: Trophy,
                color: "from-orange-500 to-red-500"
              },
              { 
                step: "05", 
                title: "Advance Career", 
                description: "Apply your new skills, get promoted faster, and increase your earning potential", 
                icon: ArrowRight,
                color: "from-pink-500 to-rose-500"
              },
              { 
                step: "06", 
                title: "Lifetime Support", 
                description: "Get ongoing support, updates, and access to our community of professionals", 
                icon: Shield,
                color: "from-teal-500 to-blue-500"
              }
            ].map((item, index) => (
              <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 animate-fade-in bg-white border-0 shadow-xl" style={{ animationDelay: `${index * 150}ms` }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardContent className="p-6 sm:p-8 relative z-10">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className={`text-4xl sm:text-6xl font-black bg-gradient-to-br ${item.color} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-300`}>
                      {item.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>
                  
                  <div className="mt-4 sm:mt-6 flex items-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12 sm:mt-16 animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 rounded-2xl w-full sm:w-auto">
              Start Your Success Journey
              <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="animate-fade-in">
            <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-bold shadow-lg animate-scale-in">
              🚨 LIMITED TIME — 86% OFF!
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 sm:mb-12 px-4">Transform Your Career for Just $94</h2>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-10 mb-8 sm:mb-12 max-w-lg mx-auto border border-white/20 shadow-2xl animate-scale-in">
              <p className="text-lg sm:text-xl line-through text-gray-300 mb-4">Regular Price: $928</p>
              <p className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4 sm:mb-6">$94</p>
              <p className="text-green-400 font-bold text-lg sm:text-xl mb-6 sm:mb-8">Save $834 Today!</p>
              
              <ul className="text-left space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  "One-time payment — no subscription",
                  "Lifetime access to all 5 courses", 
                  "25+ practice tests included",
                  "7-day money-back guarantee"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                    <span className="text-base sm:text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-scale-in w-full sm:w-auto">
              🚀 Claim Your 86% Discount Now
              <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
            
            <p className="text-gray-300 mt-6 sm:mt-8 text-base sm:text-lg px-4">
              ⏰ Offer expires soon • 🔒 Secure checkout • ✅ Instant access
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section - Now Collapsible */}
      <section className="py-20 sm:py-24 px-4 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <Badge className="mb-4 sm:mb-6 bg-blue-100 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-full">
              Get Answers
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent px-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Everything you need to know about our certification bundle
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4 animate-fade-in">
            {[
              {
                q: "Are these official certifications?",
                a: "These are comprehensive training courses designed to prepare you for official certification exams. You'll receive training completion certificates from our academy, which demonstrate your preparation for the official exams."
              },
              {
                q: "What exactly do I get?",
                a: "You get lifetime access to 5 complete training courses (300+ lessons), 25+ practice tests, completion certificates, mobile access, and 24/7 support — all for one low price."
              },
              {
                q: "Is this really lifetime access?",
                a: "Yes! Pay once and access all materials forever. No recurring fees, no subscription charges. You'll also get free updates as we improve the content."
              },
              {
                q: "What if I'm not satisfied?",
                a: "We offer a 7-day, no-questions-asked money-back guarantee. If you're not completely satisfied, we'll refund every penny."
              },
              {
                q: "How long does it take to complete?",
                a: "The total content is 130+ hours, but you can learn at your own pace. Most students complete everything within 3-6 months studying part-time."
              },
              {
                q: "Do I need prior experience?",
                a: "No prior certification experience is required! Our courses are designed for all levels, from beginners to experienced professionals looking to formalize their skills."
              },
              {
                q: "Is there mobile access?",
                a: "Absolutely! Our platform is fully optimized for mobile devices, tablets, and desktops. Learn anywhere, anytime on any device."
              },
              {
                q: "What kind of support do you provide?",
                a: "You get 24/7 access to our expert support team, community forums, and direct instructor support for any questions about the course material."
              }
            ].map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-6 sm:px-8 py-4 sm:py-6 text-left hover:no-underline hover:bg-blue-50 transition-colors duration-300 group">
                  <span className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 sm:px-8 pb-4 sm:pb-6">
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-8 sm:mt-12 animate-fade-in">
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 px-4">
              Still have questions? We're here to help!
            </p>
            <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 w-full sm:w-auto">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 px-4">Ready to Advance Your Career?</h2>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed px-4">
              Join 3,786+ professionals who've transformed their careers with our training.
              <br className="hidden sm:block" />
              <span className="text-orange-400 font-semibold">Don't let this 86% discount slip away.</span>
            </p>
            
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 mb-6 sm:mb-8 animate-scale-in w-full sm:w-auto">
              🎯 Start Learning Today — Just $94
              <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-base sm:text-lg">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                <span>7-day guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                <span>Instant access</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                <span>Lifetime updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
