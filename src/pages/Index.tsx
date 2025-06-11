
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Users, FileText } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="mb-4 bg-red-500 text-white hover:bg-red-600">
            86% OFF - LIMITED TIME
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Master Project Management —<br />
            Get 5 Top Training Courses for Just{" "}
            <span className="text-blue-600">$94</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Prepare for PMP®, PMI-SP®, PRINCE2®, CBAP®, PMI-RMP® exams with expert-led training. 
            Lifetime access. Risk-free. Career-boosting bundle!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
              Enroll Now for $94 — Instant Lifetime Access
            </Button>
            <div className="text-center">
              <p className="text-sm text-gray-500 line-through">Regular Price: $928</p>
              <p className="text-lg font-semibold text-green-600">You Save: $834</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {'★'.repeat(5)}
              </div>
              <span className="text-lg font-semibold">4.8/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-lg font-semibold">Trusted by 3,786+ learners</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex text-yellow-400 mb-2">{'★'.repeat(5)}</div>
                <p className="text-gray-600 mb-4">"Excellent training content. Helped me pass my PMP exam on the first try!"</p>
                <p className="font-semibold">- Sarah M., Project Manager</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex text-yellow-400 mb-2">{'★'.repeat(5)}</div>
                <p className="text-gray-600 mb-4">"Great value for money. All courses are comprehensive and well-structured."</p>
                <p className="font-semibold">- Michael R., IT Professional</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex text-yellow-400 mb-2">{'★'.repeat(5)}</div>
                <p className="text-gray-600 mb-4">"Lifetime access is amazing. I can revisit materials whenever needed."</p>
                <p className="font-semibold">- Lisa K., Business Analyst</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">
            5 In-Demand Project Management Training Courses — All in One Bundle
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <Card className="relative">
              <CardHeader>
                <Badge className="w-fit mb-2">Most Popular</Badge>
                <CardTitle className="text-xl">PMP® Certification Training</CardTitle>
                <CardDescription>120 Lessons, 49 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Complete PMP exam prep</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">5 practice tests included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Certificate of completion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">PMI-SP® Certification Training</CardTitle>
                <CardDescription>46 Lessons, 22 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Scheduling Professional prep</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">5 practice tests included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Certificate of completion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">PRINCE2® Foundation & Practitioner</CardTitle>
                <CardDescription>46 Lessons, 21 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Both Foundation & Practitioner</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">5 practice tests included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Certificate of completion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">CBAP® Business Analysis Training</CardTitle>
                <CardDescription>61 Lessons, 29 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Complete business analysis prep</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">5 practice tests included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Certificate of completion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">PMI-RMP® Risk Management Training</CardTitle>
                <CardDescription>16 Lessons, 8 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Risk management professional prep</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">5 practice tests included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Certificate of completion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">Bonus Features</CardTitle>
                <CardDescription>Included with every course</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">Lifetime access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">Mobile + desktop access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">24/7 support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4">
              Join the Program — Start Learning Today
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose This Bundle?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lifetime Access</h3>
              <p className="text-gray-600">Learn at your own pace with permanent access to all materials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with real-world experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Certifications</h3>
              <p className="text-gray-600">Designed to prepare you for globally recognized certifications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
              <p className="text-gray-600">Desktop + mobile access for learning anywhere, anytime</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Get help whenever you need it with round-the-clock assistance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Money-Back Guarantee</h3>
              <p className="text-gray-600">7-day no-questions-asked guarantee — completely risk-free</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Who Should Enroll?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Project managers & team leaders",
              "Aspiring project managers",
              "Business analysts",
              "Consultants & quality professionals",
              "IT professionals",
              "Corporate teams & L&D managers"
            ].map((audience, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Check className="w-8 h-8 text-green-500 mx-auto mb-4" />
                  <p className="text-lg font-semibold">{audience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Badge variant="outline" className="text-lg px-4 py-2">
              No prior certification required — all levels welcome!
            </Badge>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Click Enroll Now", description: "Simple one-click enrollment process" },
              { step: "2", title: "Get Instant Access", description: "Immediate lifetime access to all 5 courses" },
              { step: "3", title: "Learn Anytime", description: "24/7 access on any device" },
              { step: "4", title: "Prepare for Exams", description: "Use our comprehensive training materials" },
              { step: "5", title: "Earn Certificates", description: "Get completion certificates for each course" },
              { step: "6", title: "Advance Your Career", description: "Apply your new skills professionally" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-red-500 text-white">
            LIMITED TIME OFFER — 86% OFF!
          </Badge>
          <h2 className="text-4xl font-bold mb-8">Get Everything for Just $94</h2>
          <div className="bg-white text-gray-900 rounded-lg p-8 mb-8 max-w-md mx-auto">
            <p className="text-lg line-through text-gray-500 mb-2">Regular Price: $928</p>
            <p className="text-5xl font-bold text-blue-600 mb-4">$94</p>
            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>One-time payment — no subscription</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Lifetime access to all 5 courses</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>7 Days Money Back Guarantee</span>
              </li>
            </ul>
          </div>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
            Get Lifetime Access for $94 Now
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Are these official certifications?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">No — these are training courses to prepare you for certification exams. You'll receive training completion certificates from Sprintzeal, not the official certifications themselves.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Will I receive a certificate?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Yes — you will receive a training completion certificate from Sprintzeal for each course you complete.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Is this lifetime access?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Yes — you can access all training materials for life. No recurring fees or subscription charges.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can I get a refund if I'm not satisfied?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Yes — we offer a 7-day, no-questions-asked money-back guarantee. Your purchase is completely risk-free.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Advance Your Career — Enroll Today</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get 5 expert-led Project Management trainings for just $94 — lifetime access, risk-free.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
            Enroll Now & Start Learning Today
          </Button>
          <p className="text-sm text-gray-400 mt-4">
            ✅ 7-day money-back guarantee • ✅ Instant access • ✅ Lifetime access
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
