export interface BannerProps {
    data: {
      tracking: {
        widget_meta: {
          name: string;
          title: string;
          minimum_time_between_impressions: number;
          variation_id: string | null;
          revision_id: string;
          id: string;
        };
      };
      type: number;
      action: {
        should_show_sk_overlay: boolean;
        default_uri: string;
        ios_apps_flyer_link: string;
      };
      grid_span: number;
      data: {
        image: string;
        id: string;
      };
      layout_config: {
        max_width: number;
        margin_right: number;
        margin_top: number;
        margin_left: number;
        border_radius: number;
        aspect_ratio: number;
        margin_bottom: number;
      };
    };
  }