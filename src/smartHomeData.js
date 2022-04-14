export const smartHomeData = {
	lights: [
		{
			name: 'Obývací pokoj',
			state: 'off',
			id: 1,
		},
		{
			name: 'Ložnice',
			state: 'on',
			id: 2,
		},
		{
			name: 'Kuchyně',
			state: 'on',
			id: 3,
		},
		{
			name: 'Chodba',
			state: 'off',
			id: 4,
		},
	],
	climate: {
		temperature: 24,
		humidity: 50,
	},
	blinds: 'open',
	energyConsumption: {
		electricity: 36.7,
		water: 14.1,
	}
};

export default smartHomeData;