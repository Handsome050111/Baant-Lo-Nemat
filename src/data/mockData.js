export const impactStats = {
    mealsDelivered: '25,000+',
    itemsFunded: '8,430',
    beneficiariesServed: '12,500+'
};

export const needsCategories = ['Water Coolers', 'Blankets', 'Ration', 'Zakat', 'Medical', 'Education'];

export const mockFoundations = [
    {
        id: 'f1',
        name: 'Edhi Foundation',
        description: 'Providing social services like medical care, orphanages, and disaster relief.',
        trustScore: 98,
        isVerified: true,
        needsSummary: 'Medical Supplies, Ambulances',
        needs: [
            { id: 'n1', item: 'Ambulance Fuel', required: 50000, raised: 32000, category: 'Medical' },
            { id: 'n2', item: 'First Aid Kits', required: 15000, raised: 15000, category: 'Medical' }
        ]
    },
    {
        id: 'f2',
        name: 'Saylani Welfare',
        description: 'Focusing on feeding the homeless, providing education and medical care.',
        trustScore: 95,
        isVerified: true,
        needsSummary: 'Ration, Water Coolers',
        needs: [
            { id: 'n3', item: 'Monthly Ration Packs', required: 100000, raised: 45000, category: 'Ration' },
            { id: 'n4', item: 'Water Coolers', required: 20000, raised: 5000, category: 'Water Coolers' }
        ]
    },
    {
        id: 'f3',
        name: 'Al-Khidmat Foundation',
        description: 'Dedicated to disaster management, health services, and orphan care.',
        trustScore: 96,
        isVerified: true,
        needsSummary: 'Blankets, Zakat',
        needs: [
            { id: 'n5', item: 'Winter Blankets', required: 30000, raised: 12000, category: 'Blankets' },
            { id: 'n6', item: 'Zakat Fund', required: 200000, raised: 80000, category: 'Zakat' }
        ]
    },
    {
        id: 'f4',
        name: 'Chhipa Welfare',
        description: 'Running ambulance services and providing free meals daily.',
        trustScore: 92,
        isVerified: true,
        needsSummary: 'Food, Ration',
        needs: [
            { id: 'n7', item: 'Daily Meals', required: 50000, raised: 25000, category: 'Ration' }
        ]
    }
];

export const getFoundationById = (id) => mockFoundations.find(f => f.id === id);
