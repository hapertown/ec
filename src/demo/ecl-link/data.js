// Simple content for demo
module.exports = {
  links: [
    {
      href: '/example2',
      label: 'Standard link',
      variant: 'standalone',
    },
    {
      href: '/example3',
      label: 'Facebook',
      variant: 'icon',
      iconPosition: 'before',
      icon: [
        {
          shape: 'facebook',
          size: 'xl',
        },
        {
          shape: 'facebook_hover',
          size: 'xl',
        },
      ],
    },
  ],
};
