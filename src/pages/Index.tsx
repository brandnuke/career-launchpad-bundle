
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Users, FileText, BookOpen, Calendar, Trophy, Star, ArrowRight, Zap, Shield, Target } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-indigo-400/10 to-pink-400/10 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 px-4 py-2 text-sm font-semibold shadow-lg animate-scale-in">
              🔥 86% OFF - ENDS SOON
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-8 leading-tight">
              Master Project Management<br />
              <span className="text-blue-600">Get 5 Top Courses for $94</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your career with expert-led training for PMP®, PMI-SP®, PRINCE2®, CBAP®, PMI-RMP® exams. 
              <span className="font-semibold text-blue-600"> Lifetime access • Risk-free • Career-boosting</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-scale-in">
                🚀 Get Instant Access for $94
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="text-center animate-fade-in delay-300">
                <p className="text-lg text-gray-500 line-through">Regular Price: $928</p>
                <p className="text-2xl font-bold text-green-600">You Save: $834</p>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8 animate-fade-in delay-500">
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <div className="flex text-yellow-400 text-lg">
                  {'★'.repeat(5)}
                </div>
                <span className="text-lg font-semibold">4.8/5 Rating</span>
              </div>
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <Users className="w-6 h-6 text-blue-600" />
                <span className="text-lg font-semibold">3,786+ Success Stories</span>
              </div>
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <Shield className="w-6 h-6 text-green-600" />
                <span className="text-lg font-semibold">7-Day Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4 bg-white relative">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-12 animate-fade-in">What Our Students Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
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
                <CardContent className="p-8">
                  <div className="flex text-yellow-400 mb-4 text-lg">{'★'.repeat(5)}</div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">Complete Training Bundle</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              5 Industry-Leading Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to become a certified project management professional
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12">
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
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 text-xs font-bold shadow-lg">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <course.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
                  <CardDescription className="text-lg font-medium text-gray-600">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className={`w-5 h-5 ${course.bonus ? 'text-pink-600' : 'text-green-500'}`} />
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Start Your Journey Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Bundle?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed in project management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`w-20 h-20 ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <benefit.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Perfect For</h2>
            <p className="text-xl text-gray-600">
              Whether you're starting out or advancing your career
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Project managers & team leaders",
              "Aspiring project managers", 
              "Business analysts",
              "Consultants & quality professionals",
              "IT professionals",
              "Corporate teams & L&D managers"
            ].map((audience, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-white border-0 shadow-lg" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-gray-800">{audience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in">
            <Badge variant="outline" className="text-lg px-6 py-3 bg-white border-2 border-green-200 text-green-700 font-semibold">
              ✅ No prior certification required — all levels welcome!
            </Badge>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-600">
              Get started in minutes, not hours
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Enroll Instantly", description: "One-click enrollment with immediate access", icon: Zap },
              { step: "2", title: "Access Everything", description: "Get lifetime access to all 5 premium courses", icon: BookOpen },
              { step: "3", title: "Learn Flexibly", description: "Study on any device, anywhere, anytime", icon: Clock },
              { step: "4", title: "Practice & Prepare", description: "Use 25+ practice tests to master concepts", icon: Target },
              { step: "5", title: "Earn Certificates", description: "Get completion certificates for each course", icon: Trophy },
              { step: "6", title: "Advance Career", description: "Apply skills and get promoted faster", icon: ArrowRight }
            ].map((item, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 text-lg font-bold shadow-lg animate-scale-in">
              🚨 LIMITED TIME — 86% OFF!
            </Badge>
            <h2 className="text-5xl font-bold mb-12">Transform Your Career for Just $94</h2>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 mb-12 max-w-lg mx-auto border border-white/20 shadow-2xl animate-scale-in">
              <p className="text-xl line-through text-gray-300 mb-4">Regular Price: $928</p>
              <p className="text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-6">$94</p>
              <p className="text-green-400 font-bold text-xl mb-8">Save $834 Today!</p>
              
              <ul className="text-left space-y-4 mb-8">
                {[
                  "One-time payment — no subscription",
                  "Lifetime access to all 5 courses", 
                  "25+ practice tests included",
                  "7-day money-back guarantee"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-green-400" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-scale-in">
              🚀 Claim Your 86% Discount Now
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            
            <p className="text-gray-300 mt-8 text-lg">
              ⏰ Offer expires soon • 🔒 Secure checkout • ✅ Instant access
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in">Frequently Asked Questions</h2>
          <div className="space-y-6">
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
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <CardTitle className="text-xl text-left">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-left leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">Ready to Advance Your Career?</h2>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
              Join 3,786+ professionals who've transformed their careers with our training.
              <br />
              <span className="text-orange-400 font-semibold">Don't let this 86% discount slip away.</span>
            </p>
            
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 mb-8 animate-scale-in">
              🎯 Start Learning Today — Just $94
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <Check className="w-6 h-6 text-green-400" />
                <span>7-day guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-6 h-6 text-green-400" />
                <span>Instant access</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-6 h-6 text-green-400" />
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
