import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'element.link', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    logo: Schema.Attribute.Component<'element.logo', false>;
    theme: Schema.Attribute.Enumeration<['turquoise', 'orange']>;
  };
}

export interface BlocksInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_blocks';
  info: {
    displayName: 'Info Block';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    cta: Schema.Attribute.Component<'element.link', false>;
    headline: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    reversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    theme: Schema.Attribute.Enumeration<['turquoise', 'orange']>;
  };
}

export interface ElementLink extends Struct.ComponentSchema {
  collectionName: 'components_element_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementLogo extends Struct.ComponentSchema {
  collectionName: 'components_element_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    logoText: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero-section': BlocksHeroSection;
      'blocks.info-block': BlocksInfoBlock;
      'element.link': ElementLink;
      'element.logo': ElementLogo;
    }
  }
}
