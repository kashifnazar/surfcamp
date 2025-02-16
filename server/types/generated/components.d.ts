import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksFeaturedArticle extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_articles';
  info: {
    description: '';
    displayName: 'Featured Article';
  };
  attributes: {
    excerpt: Schema.Attribute.RichText;
    headline: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.Component<'element.link', false>;
  };
}

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

export interface BlocksSubscribe extends Struct.ComponentSchema {
  collectionName: 'components_blocks_subscribes';
  info: {
    displayName: 'Subscribe';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    content: Schema.Attribute.Text;
    headline: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
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

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    copy: Schema.Attribute.Text;
    logo: Schema.Attribute.Component<'element.logo', false>;
    navigation: Schema.Attribute.Component<'element.link', true>;
    policies: Schema.Attribute.Component<'element.link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    description: '';
    displayName: 'header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'element.link', false>;
    logo: Schema.Attribute.Component<'element.logo', false>;
    navigation: Schema.Attribute.Component<'element.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.featured-article': BlocksFeaturedArticle;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.info-block': BlocksInfoBlock;
      'blocks.subscribe': BlocksSubscribe;
      'element.link': ElementLink;
      'element.logo': ElementLogo;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
    }
  }
}
