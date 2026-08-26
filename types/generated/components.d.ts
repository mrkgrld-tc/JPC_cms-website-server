import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    Logo: Schema.Attribute.Component<'shared.icon-links', false>;
    Navigation: Schema.Attribute.Component<'shared.links', true>;
    Title: Schema.Attribute.String;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    Buttons: Schema.Attribute.Component<'shared.links', true>;
    Subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
    VideoBackground: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedIconLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_links';
  info: {
    displayName: 'icon links';
  };
  attributes: {
    href: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    href: Schema.Attribute.Text;
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'layout.header': LayoutHeader;
      'layout.hero-section': LayoutHeroSection;
      'shared.icon-links': SharedIconLinks;
      'shared.links': SharedLinks;
    }
  }
}
