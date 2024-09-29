import type { PageContentComponentSlug } from "../types/page-content";
import type { ComponentRenderer, PageRendererComponentProps } from "./types";
import { BLOG_1_META } from "./template/blog-1";
import { BLOG_2_META } from "./template/blog-2";
import { BLOG_3_META } from "./template/blog-3";
import { CALL_TO_ACTION_1_META } from "./template/call-to-action-1";
import { CALL_TO_ACTION_2_META } from "./template/call-to-action-2";
import { CALL_TO_ACTION_3_META } from "./template/call-to-action-3";
import { CALL_TO_ACTION_4_META } from "./template/call-to-action-4";
import { CALL_TO_ACTION_5_META } from "./template/call-to-action-5";
import { CALL_TO_ACTION_6_META } from "./template/call-to-action-6";
import { COLLECTIONS_1_META } from "./template/collections-1";
import { COLLECTIONS_2_META } from "./template/collections-2";
import { COLLECTIONS_3_META } from "./template/collections-3";
import { CONTACT_1_META } from "./template/contact-1";
import { CONTACT_2_META } from "./template/contact-2";
import { CONTENT_1_META } from "./template/content-1";
import { CONTENT_2_META } from "./template/content-2";
import { CONTENT_3_META } from "./template/content-3";
import { CONTENT_4_META } from "./template/content-4";
import { CONTENT_5_META } from "./template/content-5";
import { CONTENT_6_META } from "./template/content-6";
import { FAQ_1_META } from "./template/faq-1";
import { FAQ_2_META } from "./template/faq-2";
import { FAQ_3_META } from "./template/faq-3";
import { FAQ_4_META } from "./template/faq-4";
import { FEATURE_LIST_1_META } from "./template/feature-list-1";
import { FEATURE_LIST_2_META } from "./template/feature-list-2";
import { FEATURE_LIST_3_META } from "./template/feature-list-3";
import { FEATURE_LIST_4_META } from "./template/feature-list-4";
import { FEATURE_LIST_5_META } from "./template/feature-list-5";
import { FEATURE_LIST_6_META } from "./template/feature-list-6";
import { FEATURE_LIST_7_META } from "./template/feature-list-7";
import { FOOTER_1_META } from "./template/footer-1";
import { FOOTER_2_META } from "./template/footer-2";
import { FOOTER_3_META } from "./template/footer-3";
import { FOOTER_4_META } from "./template/footer-4";
import { GALLERY_1_META } from "./template/gallery-1";
import { GALLERY_2_META } from "./template/gallery-2";
import { GALLERY_3_META } from "./template/gallery-3";
import { HERO_1_META } from "./template/hero-1";
import { HERO_2_META } from "./template/hero-2";
import { HERO_3_META } from "./template/hero-3";
import { HERO_4_META } from "./template/hero-4";
import { HERO_5_META } from "./template/hero-5";
import { HOW_IT_WORKS_1_META } from "./template/how-it-works-1";
import { LOGO_LIST_1_META } from "./template/logo-list-1";
import { LOGO_LIST_2_META } from "./template/logo-list-2";
import { LOGO_LIST_3_META } from "./template/logo-list-3";
import { LOGO_LIST_4_META } from "./template/logo-list-4";
import { NAVBAR_1_META } from "./template/navbar-1";
import { NEWSLETTER_1_META } from "./template/newsletter-1";
import { NEWSLETTER_2_META } from "./template/newsletter-2";
import { PRICING_1_META } from "./template/pricing-1";
import { PRICING_2_META } from "./template/pricing-2";
import { PRICING_3_META } from "./template/pricing-3";
import { STATS_1_META } from "./template/stats-1";
import { STATS_2_META } from "./template/stats-2";
import { STATS_3_META } from "./template/stats-3";
import { STEP_1_META } from "./template/step-1";
import { STEP_2_META } from "./template/step-2";
import { STEP_3_META } from "./template/step-3";
import { TEAM_1_META } from "./template/team-1";
import { TEAM_2_META } from "./template/team-2";
import { TEAM_3_META } from "./template/team-3";
import { TEAM_4_META } from "./template/team-4";
import { TESTIMONIALS_1_META } from "./template/testimonials-1";
import { TESTIMONIALS_2_META } from "./template/testimonials-2";
import { TESTIMONIALS_3_META } from "./template/testimonials-3";
import { TESTIMONIALS_4_META } from "./template/testimonials-4";

export const COMPONENTS = [
  BLOG_1_META,
  BLOG_2_META,
  BLOG_3_META,
  CALL_TO_ACTION_1_META,
  CALL_TO_ACTION_2_META,
  CALL_TO_ACTION_3_META,
  CALL_TO_ACTION_4_META,
  CALL_TO_ACTION_5_META,
  CALL_TO_ACTION_6_META,
  COLLECTIONS_1_META,
  COLLECTIONS_2_META,
  COLLECTIONS_3_META,
  CONTACT_1_META,
  CONTACT_2_META,
  CONTENT_1_META,
  CONTENT_2_META,
  CONTENT_3_META,
  CONTENT_4_META,
  CONTENT_5_META,
  CONTENT_6_META,
  FAQ_1_META,
  FAQ_2_META,
  FAQ_3_META,
  FAQ_4_META,
  FEATURE_LIST_1_META,
  FEATURE_LIST_2_META,
  FEATURE_LIST_3_META,
  FEATURE_LIST_4_META,
  FEATURE_LIST_5_META,
  FEATURE_LIST_6_META,
  FEATURE_LIST_7_META,
  FOOTER_1_META,
  FOOTER_2_META,
  FOOTER_3_META,
  FOOTER_4_META,
  GALLERY_1_META,
  GALLERY_2_META,
  GALLERY_3_META,
  HERO_1_META,
  HERO_2_META,
  HERO_3_META,
  HERO_4_META,
  HERO_5_META,
  HOW_IT_WORKS_1_META,
  LOGO_LIST_1_META,
  LOGO_LIST_2_META,
  LOGO_LIST_3_META,
  LOGO_LIST_4_META,
  NAVBAR_1_META,
  NEWSLETTER_1_META,
  NEWSLETTER_2_META,
  PRICING_1_META,
  PRICING_2_META,
  PRICING_3_META,
  STATS_1_META,
  STATS_2_META,
  STATS_3_META,
  STEP_1_META,
  STEP_2_META,
  STEP_3_META,
  TEAM_1_META,
  TEAM_2_META,
  TEAM_3_META,
  TEAM_4_META,
  TESTIMONIALS_1_META,
  TESTIMONIALS_2_META,
  TESTIMONIALS_3_META,
  TESTIMONIALS_4_META,
] satisfies ComponentRenderer<
  PageContentComponentSlug,
  PageRendererComponentProps
>[];
