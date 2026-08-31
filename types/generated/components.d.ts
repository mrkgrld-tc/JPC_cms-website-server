import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    background_media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    cta_buttons: Schema.Attribute.Component<'shared.links', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutPhilosophySection extends Struct.ComponentSchema {
  collectionName: 'components_layout_philosophy_sections';
  info: {
    displayName: 'Philosophy Section';
  };
  attributes: {
    description: Schema.Attribute.Component<'shared.text-content', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    qoute: Schema.Attribute.String;
  };
}

export interface LayoutSdgSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_sdg_sections';
  info: {
    displayName: 'SDG Section';
  };
  attributes: {
    body: Schema.Attribute.RichText;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedIconLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_links';
  info: {
    displayName: 'Icon Links';
    icon: 'attachment';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isExternal: Schema.Attribute.Enumeration<['True', 'False']>;
    link: Schema.Attribute.Text;
  };
}

export interface SharedJustLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_just_links';
  info: {
    displayName: 'Just Links';
    icon: 'attachment';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Enumeration<['True', 'False']>;
  };
}

export interface SharedLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Text Links';
    icon: 'attachment';
  };
  attributes: {
    href: Schema.Attribute.Text;
    is_external: Schema.Attribute.Enumeration<['True', 'False']>;
    text: Schema.Attribute.String;
  };
}

export interface SharedTextContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_contents';
  info: {
    displayName: 'Content Text';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'layout.hero-section': LayoutHeroSection;
      'layout.philosophy-section': LayoutPhilosophySection;
      'layout.sdg-section': LayoutSdgSection;
      'shared.icon-links': SharedIconLinks;
      'shared.just-links': SharedJustLinks;
      'shared.links': SharedLinks;
      'shared.text-content': SharedTextContent;
    }
  }
}
