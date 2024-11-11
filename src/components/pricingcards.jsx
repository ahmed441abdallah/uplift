import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Check, X } from 'lucide-react'

const PricingCards = () => {
    const plans = [
        {
            name: "CONSTRUCTION PROJECT",
            features: {
                "Layout with furniture": true,
                "Technical documentation": true,
                "Design concept": false,
                "3D visualisation": false,
                "List of materials and furnishings": false,
                "Materials calculation": false,
                "Design supervision": false,
            },
            className: "bg-[#131313]  text-white",
        },
        {
            name: "FULL INTERIOR DESIGN PROJECT",
            features: {
                "Layout with furniture": true,
                "Technical documentation": true,
                "Design concept": true,
                "3D visualization": true,
                "List of materials and furnishings": true,
                "Materials calculation": true,
                "Design supervision": false,
            },
            className: "bg-white",
        },
        {
            name: "INTERIOR DESIGN WITH SUPERVISION",
            features: {
                "Layout with furniture": true,
                "Technical documentation": true,
                "Design concept": true,
                "3D visualization": true,
                "List of materials and furnishings": true,
                "Materials calculation": true,
                "Design supervision": true,
            },
            className: "bg-[#131313] text-white",
        },
    ]
    return (
        <div className="grid gap-6 lg:grid-cols-3 p-4">
            {plans.map((plan) => (
                <Card key={plan.name} className={`border-0 shadow-lg ${plan.className}`}>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-xl text-center">{plan.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-8">
                        <div className="space-y-4">
                            {Object.entries(plan.features).map(([feature, included]) => (
                                <div key={feature} className="flex items-center gap-2">
                                    {included ? (
                                        <Check className="w-5 h-5 text-gray-600" />
                                    ) : (
                                        <X className="w-5 h-5 text-muted-foreground" />
                                    )}
                                    <span className={included ? "" : "text-muted-foreground"}>
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default PricingCards
