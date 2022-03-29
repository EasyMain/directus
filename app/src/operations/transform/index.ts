import { defineOperationApp } from '@directus/shared/utils';

export default defineOperationApp({
	id: 'transform',
	icon: 'move_down',
	name: '$t:operations.transform.name',
	description: '$t:operations.transform.description',
	preview: (options) => `# ${options.name}`,
	options: [
		{
			field: 'json',
			name: '$t:json',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input-code',
				options: {
					language: 'json',
				},
			},
		},
	],
});
