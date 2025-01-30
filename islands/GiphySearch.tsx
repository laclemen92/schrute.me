import { GiphyFetch } from "@giphy/js-fetch-api";
import { useEffect, useState } from "preact/hooks";
import GiphyComponent from "@/islands/GiphyComponent.tsx";

type selectedGif = {
  index: string | null;
  gifId: string | null;
  gif: any;
}

const defaultGifs = [
  {
      "type": "gif",
      "id": "g5R9dok94mrIvplmZd",
      "url": "https://giphy.com/gifs/theoffice-happy-birthday-the-office-happybirthday-g5R9dok94mrIvplmZd",
      "slug": "theoffice-happy-birthday-the-office-happybirthday-g5R9dok94mrIvplmZd",
      "bitly_gif_url": "https://gph.is/g/4Vyzo03",
      "bitly_url": "https://gph.is/g/4Vyzo03",
      "embed_url": "https://giphy.com/embed/g5R9dok94mrIvplmZd",
      "username": "theoffice",
      "source": "",
      "title": "Happy Birthday GIF by The Office",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "is_sticker": false,
      "import_datetime": "2021-06-17 19:36:07",
      "trending_datetime": "2021-07-06 21:46:51",
      "images": {
          "original": {
              "height": 400,
              "width": 480,
              "size": "1943488",
              "url": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g",
              "mp4_size": "538581",
              "mp4": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/giphy.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
              "webp_size": "557196",
              "webp": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/giphy.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.webp&ct=g",
              "frames": "30",
              "hash": "9761c76cb5c50c62d097e2d827ef793d"
          },
          "downsized": {
              "height": 400,
              "width": 480,
              "size": "1943488",
              "url": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
              "height": 400,
              "width": 480,
              "size": "1943488",
              "url": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
              "height": 400,
              "width": 480,
              "size": "1943488",
              "url": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
              "height": 240,
              "width": 287,
              "mp4_size": "193232",
              "mp4": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/giphy-downsized-small.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
              "height": 400,
              "width": 480,
              "size": "1943488",
              "url": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/giphy_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
              "height": 200,
              "width": 240,
              "size": "516071",
              "url": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/200.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.gif&ct=g",
              "mp4_size": "161968",
              "mp4": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/200.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.mp4&ct=g",
              "webp_size": "222544",
              "webp": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/200.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
              "height": 200,
              "width": 240,
              "size": "103715",
              "url": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/200_d.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_d.gif&ct=g",
              "webp_size": "67910",
              "webp": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/200_d.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
              "height": 100,
              "width": 120,
              "size": "178432",
              "url": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/100.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.gif&ct=g",
              "mp4_size": "64144",
              "mp4": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/100.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.mp4&ct=g",
              "webp_size": "83984",
              "webp": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/100.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
              "height": 100,
              "width": 120,
              "size": "11283",
              "url": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/100_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
              "height": 200,
              "width": 240,
              "size": "32751",
              "url": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/200_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
              "height": 166,
              "width": 200,
              "size": "399871",
              "url": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/200w.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.gif&ct=g",
              "mp4_size": "129468",
              "mp4": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/200w.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.mp4&ct=g",
              "webp_size": "158034",
              "webp": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/200w.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
              "height": 166,
              "width": 200,
              "size": "80482",
              "url": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/200w_d.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
              "webp_size": "53522",
              "webp": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/200w_d.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
              "height": 84,
              "width": 100,
              "size": "135160",
              "url": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/100w.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.gif&ct=g",
              "mp4_size": "48524",
              "mp4": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/100w.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.mp4&ct=g",
              "webp_size": "65382",
              "webp": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/100w.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
              "height": 84,
              "width": 100,
              "size": "8681",
              "url": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/100w_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
              "height": 166,
              "width": 200,
              "size": "24156",
              "url": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/200w_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_s.gif&ct=g"
          },
          "looping": {
              "mp4_size": "4105974",
              "mp4": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/giphy-loop.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g",
              "width": null,
              "height": null
          },
          "original_still": {
              "height": 400,
              "width": 480,
              "size": "106131",
              "url": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/giphy_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
              "height": 400,
              "width": 480,
              "mp4_size": "538581",
              "mp4": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/giphy.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.mp4&ct=g"
          },
          "preview": {
              "height": 88,
              "width": 104,
              "mp4_size": "49188",
              "mp4": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/giphy-preview.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
              "height": 84,
              "width": 100,
              "size": "42855",
              "url": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/giphy-preview.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
              "height": 84,
              "width": 100,
              "size": "34078",
              "url": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/giphy-preview.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
              "height": 400,
              "width": 480,
              "size": "1943488",
              "url": "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/480w_s.jpg?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
          }
      },
      "user": {
          "avatar_url": "https://media4.giphy.com/avatars/theoffice/UYGpbCVMjlBo.jpg",
          "banner_image": "https://media4.giphy.com/channel_assets/theoffice/rbxhsCcpp2DW.gif",
          "banner_url": "https://media4.giphy.com/channel_assets/theoffice/rbxhsCcpp2DW.gif",
          "profile_url": "https://giphy.com/theoffice/",
          "username": "theoffice",
          "display_name": "The Office",
          "description": "The official Giphy page for The Office on Peacock.",
          "instagram_url": "https://instagram.com/theoffice",
          "website_url": "https://www.peacocktv.com/",
          "is_verified": true,
          "suppress_chrome": false,
          "is_public": false
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWc1Ujlkb2s5NG1ySXZwbG1aZCZjdD1n",
      "analytics": {
          "onload": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWc1Ujlkb2s5NG1ySXZwbG1aZCZjdD1n&action_type=SEEN"
          },
          "onclick": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWc1Ujlkb2s5NG1ySXZwbG1aZCZjdD1n&action_type=CLICK"
          },
          "onsent": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWc1Ujlkb2s5NG1ySXZwbG1aZCZjdD1n&action_type=SENT"
          }
      },
      "cta": {
          "link": "https://www.evil.com",
          "text": "click here to win $1000000"
      },
      "alt_text": "The Office gif. Steve Carell as Michael Scott wears a birthday hat and Ellie Kemper as Erin Hannon holds streamers in her hand. Both are dancing in a festive manner, celebrating someone's birthday in an awkward way. Text, \"Happy birthday.\"",
      "tags": [],
      "bottle_data": {},
      "response_id": "hw7b4mh9le6dynsub6zytj806bv45azlbycpq033",
      "is_anonymous": false,
      "is_community": false,
      "is_featured": false,
      "is_hidden": false,
      "is_indexable": false,
      "is_preserve_size": false,
      "is_realtime": false,
      "is_removed": false,
      "is_dynamic": false
  },
  {
      "type": "gif",
      "id": "UVah1k9VydwNC4RdOT",
      "url": "https://giphy.com/gifs/theoffice-the-office-michael-scott-tv-UVah1k9VydwNC4RdOT",
      "slug": "theoffice-the-office-michael-scott-tv-UVah1k9VydwNC4RdOT",
      "bitly_gif_url": "https://gph.is/g/4bG67p3",
      "bitly_url": "https://gph.is/g/4bG67p3",
      "embed_url": "https://giphy.com/embed/UVah1k9VydwNC4RdOT",
      "username": "theoffice",
      "source": "",
      "title": "Harry Potter Office Tv GIF by The Office",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "is_sticker": false,
      "import_datetime": "2021-02-01 18:10:35",
      "trending_datetime": "0000-00-00 00:00:00",
      "images": {
          "original": {
              "height": 281,
              "width": 500,
              "size": "3135561",
              "url": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g",
              "mp4_size": "434877",
              "mp4": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/giphy.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
              "webp_size": "1260238",
              "webp": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/giphy.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.webp&ct=g",
              "frames": "80",
              "hash": "42eec01af0a68f86f55b14f2c3cde096"
          },
          "downsized": {
              "height": 224,
              "width": 400,
              "size": "1703784",
              "url": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/giphy-downsized.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
              "height": 281,
              "width": 500,
              "size": "3135561",
              "url": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
              "height": 281,
              "width": 500,
              "size": "3135561",
              "url": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
              "height": 224,
              "width": 399,
              "mp4_size": "192869",
              "mp4": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/giphy-downsized-small.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
              "height": 224,
              "width": 400,
              "size": "30414",
              "url": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/giphy-downsized_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
              "height": 200,
              "width": 358,
              "size": "1383299",
              "url": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/200.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.gif&ct=g",
              "mp4_size": "292938",
              "mp4": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/200.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.mp4&ct=g",
              "webp_size": "677678",
              "webp": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/200.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
              "height": 200,
              "width": 358,
              "size": "102403",
              "url": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/200_d.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_d.gif&ct=g",
              "webp_size": "70750",
              "webp": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/200_d.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
              "height": 100,
              "width": 176,
              "size": "507511",
              "url": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/100.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.gif&ct=g",
              "mp4_size": "95506",
              "mp4": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/100.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.mp4&ct=g",
              "webp_size": "189536",
              "webp": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/100.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
              "height": 100,
              "width": 176,
              "size": "7124",
              "url": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/100_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
              "height": 200,
              "width": 358,
              "size": "19044",
              "url": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/200_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
              "height": 112,
              "width": 200,
              "size": "655965",
              "url": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/200w.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.gif&ct=g",
              "mp4_size": "115870",
              "mp4": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/200w.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.mp4&ct=g",
              "webp_size": "225338",
              "webp": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/200w.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
              "height": 112,
              "width": 200,
              "size": "45380",
              "url": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/200w_d.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
              "webp_size": "25164",
              "webp": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/200w_d.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
              "height": 56,
              "width": 100,
              "size": "204313",
              "url": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/100w.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.gif&ct=g",
              "mp4_size": "43483",
              "mp4": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/100w.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.mp4&ct=g",
              "webp_size": "84056",
              "webp": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/100w.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
              "height": 56,
              "width": 100,
              "size": "3368",
              "url": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/100w_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
              "height": 112,
              "width": 200,
              "size": "9373",
              "url": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/200w_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_s.gif&ct=g"
          },
          "looping": {
              "mp4_size": "2198625",
              "mp4": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/giphy-loop.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g",
              "width": null,
              "height": null
          },
          "original_still": {
              "height": 281,
              "width": 500,
              "size": "31017",
              "url": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/giphy_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
              "height": 268,
              "width": 478,
              "mp4_size": "434877",
              "mp4": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/giphy.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.mp4&ct=g"
          },
          "preview": {
              "height": 84,
              "width": 150,
              "mp4_size": "40735",
              "mp4": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/giphy-preview.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
              "height": 56,
              "width": 100,
              "size": "25379",
              "url": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/giphy-preview.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
              "height": 56,
              "width": 100,
              "size": "15124",
              "url": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/giphy-preview.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
              "height": 270,
              "width": 480,
              "size": "3135561",
              "url": "https://media0.giphy.com/media/UVah1k9VydwNC4RdOT/480w_s.jpg?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
          }
      },
      "user": {
          "avatar_url": "https://media4.giphy.com/avatars/theoffice/UYGpbCVMjlBo.jpg",
          "banner_image": "https://media4.giphy.com/channel_assets/theoffice/rbxhsCcpp2DW.gif",
          "banner_url": "https://media4.giphy.com/channel_assets/theoffice/rbxhsCcpp2DW.gif",
          "profile_url": "https://giphy.com/theoffice/",
          "username": "theoffice",
          "display_name": "The Office",
          "description": "The official Giphy page for The Office on Peacock.",
          "instagram_url": "https://instagram.com/theoffice",
          "website_url": "https://www.peacocktv.com/",
          "is_verified": true,
          "suppress_chrome": false,
          "is_public": false
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPVVWYWgxazlWeWR3TkM0UmRPVCZjdD1n",
      "analytics": {
          "onload": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPVVWYWgxazlWeWR3TkM0UmRPVCZjdD1n&action_type=SEEN"
          },
          "onclick": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPVVWYWgxazlWeWR3TkM0UmRPVCZjdD1n&action_type=CLICK"
          },
          "onsent": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPVVWYWgxazlWeWR3TkM0UmRPVCZjdD1n&action_type=SENT"
          }
      },
      "alt_text": "",
      "tags": [],
      "bottle_data": {},
      "response_id": "hw7b4mh9le6dynsub6zytj806bv45azlbycpq033",
      "is_anonymous": false,
      "is_community": false,
      "is_featured": false,
      "is_hidden": false,
      "is_indexable": false,
      "is_preserve_size": false,
      "is_realtime": false,
      "is_removed": false,
      "is_dynamic": false
  },
  {
      "type": "gif",
      "id": "MZocLC5dJprPTcrm65",
      "url": "https://giphy.com/gifs/theoffice-MZocLC5dJprPTcrm65",
      "slug": "theoffice-MZocLC5dJprPTcrm65",
      "bitly_gif_url": "https://gph.is/g/4DeKD56",
      "bitly_url": "https://gph.is/g/4DeKD56",
      "embed_url": "https://giphy.com/embed/MZocLC5dJprPTcrm65",
      "username": "theoffice",
      "source": "",
      "title": "Oh My God Omg GIF by The Office",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "is_sticker": false,
      "import_datetime": "2020-12-17 20:55:13",
      "trending_datetime": "2021-05-11 20:00:12",
      "images": {
          "original": {
              "height": 400,
              "width": 480,
              "size": "1381790",
              "url": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g",
              "mp4_size": "397921",
              "mp4": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/giphy.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
              "webp_size": "456918",
              "webp": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/giphy.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.webp&ct=g",
              "frames": "31",
              "hash": "925e3c2f92c4f657c4c4e3e79cb1af4e"
          },
          "downsized": {
              "height": 400,
              "width": 480,
              "size": "1381790",
              "url": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
              "height": 400,
              "width": 480,
              "size": "1381790",
              "url": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
              "height": 400,
              "width": 480,
              "size": "1381790",
              "url": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
              "height": 266,
              "width": 318,
              "mp4_size": "194076",
              "mp4": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/giphy-downsized-small.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
              "height": 400,
              "width": 480,
              "size": "1381790",
              "url": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/giphy_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
              "height": 200,
              "width": 240,
              "size": "397937",
              "url": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/200.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.gif&ct=g",
              "mp4_size": "143848",
              "mp4": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/200.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.mp4&ct=g",
              "webp_size": "203046",
              "webp": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/200.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
              "height": 200,
              "width": 240,
              "size": "73555",
              "url": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/200_d.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_d.gif&ct=g",
              "webp_size": "57832",
              "webp": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/200_d.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
              "height": 100,
              "width": 120,
              "size": "146347",
              "url": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/100.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.gif&ct=g",
              "mp4_size": "51727",
              "mp4": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/100.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.mp4&ct=g",
              "webp_size": "67440",
              "webp": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/100.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
              "height": 100,
              "width": 120,
              "size": "4155",
              "url": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/100_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
              "height": 200,
              "width": 240,
              "size": "10209",
              "url": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/200_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
              "height": 166,
              "width": 200,
              "size": "323726",
              "url": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/200w.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.gif&ct=g",
              "mp4_size": "104657",
              "mp4": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/200w.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.mp4&ct=g",
              "webp_size": "133042",
              "webp": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/200w.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
              "height": 166,
              "width": 200,
              "size": "60402",
              "url": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/200w_d.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
              "webp_size": "45094",
              "webp": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/200w_d.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
              "height": 84,
              "width": 100,
              "size": "113640",
              "url": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/100w.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.gif&ct=g",
              "mp4_size": "37904",
              "mp4": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/100w.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.mp4&ct=g",
              "webp_size": "52948",
              "webp": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/100w.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
              "height": 84,
              "width": 100,
              "size": "3468",
              "url": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/100w_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
              "height": 166,
              "width": 200,
              "size": "7992",
              "url": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/200w_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_s.gif&ct=g"
          },
          "looping": {
              "mp4_size": "2797103",
              "mp4": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/giphy-loop.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g",
              "width": null,
              "height": null
          },
          "original_still": {
              "height": 400,
              "width": 480,
              "size": "24919",
              "url": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/giphy_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
              "height": 400,
              "width": 480,
              "mp4_size": "397921",
              "mp4": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/giphy.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.mp4&ct=g"
          },
          "preview": {
              "height": 102,
              "width": 119,
              "mp4_size": "44142",
              "mp4": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/giphy-preview.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
              "height": 84,
              "width": 100,
              "size": "34379",
              "url": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/giphy-preview.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
              "height": 84,
              "width": 100,
              "size": "41342",
              "url": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/giphy-preview.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
              "height": 400,
              "width": 480,
              "size": "1381790",
              "url": "https://media3.giphy.com/media/MZocLC5dJprPTcrm65/480w_s.jpg?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
          }
      },
      "user": {
          "avatar_url": "https://media4.giphy.com/avatars/theoffice/UYGpbCVMjlBo.jpg",
          "banner_image": "https://media4.giphy.com/channel_assets/theoffice/rbxhsCcpp2DW.gif",
          "banner_url": "https://media4.giphy.com/channel_assets/theoffice/rbxhsCcpp2DW.gif",
          "profile_url": "https://giphy.com/theoffice/",
          "username": "theoffice",
          "display_name": "The Office",
          "description": "The official Giphy page for The Office on Peacock.",
          "instagram_url": "https://instagram.com/theoffice",
          "website_url": "https://www.peacocktv.com/",
          "is_verified": true,
          "suppress_chrome": false,
          "is_public": false
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPU1ab2NMQzVkSnByUFRjcm02NSZjdD1n",
      "analytics": {
          "onload": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPU1ab2NMQzVkSnByUFRjcm02NSZjdD1n&action_type=SEEN"
          },
          "onclick": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPU1ab2NMQzVkSnByUFRjcm02NSZjdD1n&action_type=CLICK"
          },
          "onsent": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPU1ab2NMQzVkSnByUFRjcm02NSZjdD1n&action_type=SENT"
          }
      },
      "alt_text": "The Office gif. Steve Carell as Michael Scott bursts out of his office and looks around with wide eyes as the other employees run by him. He frantically says, \"Oh my god! Okay, it’s happening!”",
      "tags": [],
      "bottle_data": {},
      "response_id": "hw7b4mh9le6dynsub6zytj806bv45azlbycpq033",
      "is_anonymous": false,
      "is_community": false,
      "is_featured": false,
      "is_hidden": false,
      "is_indexable": false,
      "is_preserve_size": false,
      "is_realtime": false,
      "is_removed": false,
      "is_dynamic": false
  },
  {
      "type": "gif",
      "id": "b8RfbQFaOs1rO10ren",
      "url": "https://giphy.com/gifs/theoffice-b8RfbQFaOs1rO10ren",
      "slug": "theoffice-b8RfbQFaOs1rO10ren",
      "bitly_gif_url": "https://gph.is/g/aXLlbvO",
      "bitly_url": "https://gph.is/g/aXLlbvO",
      "embed_url": "https://giphy.com/embed/b8RfbQFaOs1rO10ren",
      "username": "theoffice",
      "source": "",
      "title": "Season 4 Wow GIF by The Office",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "is_sticker": false,
      "import_datetime": "2020-12-05 07:55:41",
      "trending_datetime": "2021-12-07 14:00:03",
      "images": {
          "original": {
              "height": 400,
              "width": 480,
              "size": "1353984",
              "url": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g",
              "mp4_size": "444879",
              "mp4": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/giphy.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
              "webp_size": "471736",
              "webp": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/giphy.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.webp&ct=g",
              "frames": "20",
              "hash": "97cc7880d02632916578517fe1cd9951"
          },
          "downsized": {
              "height": 400,
              "width": 480,
              "size": "1353984",
              "url": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
              "height": 400,
              "width": 480,
              "size": "1353984",
              "url": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
              "height": 400,
              "width": 480,
              "size": "1353984",
              "url": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
              "height": 266,
              "width": 318,
              "mp4_size": "188214",
              "mp4": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/giphy-downsized-small.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
              "height": 400,
              "width": 480,
              "size": "1353984",
              "url": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/giphy_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
              "height": 200,
              "width": 240,
              "size": "330126",
              "url": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/200.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.gif&ct=g",
              "mp4_size": "66472",
              "mp4": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/200.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.mp4&ct=g",
              "webp_size": "143482",
              "webp": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/200.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
              "height": 200,
              "width": 240,
              "size": "95680",
              "url": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/200_d.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_d.gif&ct=g",
              "webp_size": "64450",
              "webp": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/200_d.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
              "height": 100,
              "width": 120,
              "size": "116646",
              "url": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/100.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.gif&ct=g",
              "mp4_size": "25390",
              "mp4": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/100.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.mp4&ct=g",
              "webp_size": "45744",
              "webp": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/100.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
              "height": 100,
              "width": 120,
              "size": "11510",
              "url": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/100_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
              "height": 200,
              "width": 240,
              "size": "34377",
              "url": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/200_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
              "height": 166,
              "width": 200,
              "size": "245129",
              "url": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/200w.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.gif&ct=g",
              "mp4_size": "51693",
              "mp4": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/200w.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.mp4&ct=g",
              "webp_size": "93426",
              "webp": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/200w.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
              "height": 166,
              "width": 200,
              "size": "70925",
              "url": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/200w_d.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
              "webp_size": "48280",
              "webp": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/200w_d.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
              "height": 84,
              "width": 100,
              "size": "88784",
              "url": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/100w.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.gif&ct=g",
              "mp4_size": "19847",
              "mp4": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/100w.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.mp4&ct=g",
              "webp_size": "37190",
              "webp": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/100w.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
              "height": 84,
              "width": 100,
              "size": "9008",
              "url": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/100w_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
              "height": 166,
              "width": 200,
              "size": "25386",
              "url": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/200w_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_s.gif&ct=g"
          },
          "looping": {
              "mp4_size": "4608297",
              "mp4": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/giphy-loop.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g",
              "width": null,
              "height": null
          },
          "original_still": {
              "height": 400,
              "width": 480,
              "size": "133239",
              "url": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/giphy_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
              "height": 400,
              "width": 480,
              "mp4_size": "444879",
              "mp4": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/giphy.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.mp4&ct=g"
          },
          "preview": {
              "height": 126,
              "width": 150,
              "mp4_size": "31097",
              "mp4": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/giphy-preview.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
              "height": 84,
              "width": 100,
              "size": "41098",
              "url": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/giphy-preview.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
              "height": 84,
              "width": 100,
              "size": "37190",
              "url": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/100w.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.webp&ct=g"
          },
          "480w_still": {
              "height": 400,
              "width": 480,
              "size": "1353984",
              "url": "https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/480w_s.jpg?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
          }
      },
      "user": {
          "avatar_url": "https://media4.giphy.com/avatars/theoffice/UYGpbCVMjlBo.jpg",
          "banner_image": "https://media4.giphy.com/channel_assets/theoffice/rbxhsCcpp2DW.gif",
          "banner_url": "https://media4.giphy.com/channel_assets/theoffice/rbxhsCcpp2DW.gif",
          "profile_url": "https://giphy.com/theoffice/",
          "username": "theoffice",
          "display_name": "The Office",
          "description": "The official Giphy page for The Office on Peacock.",
          "instagram_url": "https://instagram.com/theoffice",
          "website_url": "https://www.peacocktv.com/",
          "is_verified": true,
          "suppress_chrome": false,
          "is_public": false
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWI4UmZiUUZhT3Mxck8xMHJlbiZjdD1n",
      "analytics": {
          "onload": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWI4UmZiUUZhT3Mxck8xMHJlbiZjdD1n&action_type=SEEN"
          },
          "onclick": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWI4UmZiUUZhT3Mxck8xMHJlbiZjdD1n&action_type=CLICK"
          },
          "onsent": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWI4UmZiUUZhT3Mxck8xMHJlbiZjdD1n&action_type=SENT"
          }
      },
      "alt_text": "The Office gif. Steve Carell as Michael Scott bulges his eyes as he says, \"Oh, wow,\" emphatically.",
      "tags": [],
      "bottle_data": {},
      "response_id": "hw7b4mh9le6dynsub6zytj806bv45azlbycpq033",
      "is_anonymous": false,
      "is_community": false,
      "is_featured": false,
      "is_hidden": false,
      "is_indexable": false,
      "is_preserve_size": false,
      "is_realtime": false,
      "is_removed": false,
      "is_dynamic": false
  },
  {
      "type": "gif",
      "id": "gnk3mpYb20kj32YNQl",
      "url": "https://giphy.com/gifs/theoffice-gnk3mpYb20kj32YNQl",
      "slug": "theoffice-gnk3mpYb20kj32YNQl",
      "bitly_gif_url": "https://gph.is/g/aQqjbvV",
      "bitly_url": "https://gph.is/g/aQqjbvV",
      "embed_url": "https://giphy.com/embed/gnk3mpYb20kj32YNQl",
      "username": "theoffice",
      "source": "",
      "title": "Season 4 Michael GIF by The Office",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "is_sticker": false,
      "import_datetime": "2020-12-05 07:55:28",
      "trending_datetime": "0000-00-00 00:00:00",
      "images": {
          "original": {
              "height": 400,
              "width": 480,
              "size": "5668620",
              "url": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g",
              "mp4_size": "1834302",
              "mp4": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/giphy.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
              "webp_size": "1977804",
              "webp": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/giphy.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.webp&ct=g",
              "frames": "64",
              "hash": "8a4cdd8aca98dfded253ab68752928ca"
          },
          "downsized": {
              "height": 250,
              "width": 300,
              "size": "1717386",
              "url": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/giphy-downsized.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
              "height": 400,
              "width": 480,
              "size": "5668620",
              "url": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
              "height": 400,
              "width": 480,
              "size": "4103253",
              "url": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/giphy-downsized-medium.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-downsized-medium.gif&ct=g"
          },
          "downsized_small": {
              "height": 266,
              "width": 318,
              "mp4_size": "196761",
              "mp4": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/giphy-downsized-small.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
              "height": 250,
              "width": 300,
              "size": "31679",
              "url": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/giphy-downsized_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
              "height": 200,
              "width": 240,
              "size": "1297590",
              "url": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/200.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.gif&ct=g",
              "mp4_size": "349730",
              "mp4": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/200.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.mp4&ct=g",
              "webp_size": "589556",
              "webp": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/200.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
              "height": 200,
              "width": 240,
              "size": "116255",
              "url": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/200_d.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_d.gif&ct=g",
              "webp_size": "79558",
              "webp": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/200_d.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
              "height": 100,
              "width": 120,
              "size": "445976",
              "url": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/100.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.gif&ct=g",
              "mp4_size": "125826",
              "mp4": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/100.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.mp4&ct=g",
              "webp_size": "181440",
              "webp": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/100.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
              "height": 100,
              "width": 120,
              "size": "13048",
              "url": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/100_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
              "height": 200,
              "width": 240,
              "size": "40161",
              "url": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/200_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
              "height": 166,
              "width": 200,
              "size": "950262",
              "url": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/200w.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.gif&ct=g",
              "mp4_size": "279552",
              "mp4": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/200w.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.mp4&ct=g",
              "webp_size": "385306",
              "webp": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/200w.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
              "height": 166,
              "width": 200,
              "size": "84989",
              "url": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/200w_d.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
              "webp_size": "59564",
              "webp": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/200w_d.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
              "height": 84,
              "width": 100,
              "size": "321478",
              "url": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/100w.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.gif&ct=g",
              "mp4_size": "99783",
              "mp4": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/100w.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.mp4&ct=g",
              "webp_size": "141400",
              "webp": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/100w.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
              "height": 84,
              "width": 100,
              "size": "9890",
              "url": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/100w_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
              "height": 166,
              "width": 200,
              "size": "29501",
              "url": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/200w_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_s.gif&ct=g"
          },
          "looping": {
              "mp4_size": "6566578",
              "mp4": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/giphy-loop.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g",
              "width": null,
              "height": null
          },
          "original_still": {
              "height": 400,
              "width": 480,
              "size": "142194",
              "url": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/giphy_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
              "height": 400,
              "width": 480,
              "mp4_size": "1834302",
              "mp4": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/giphy.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.mp4&ct=g"
          },
          "preview": {
              "height": 126,
              "width": 150,
              "mp4_size": "48368",
              "mp4": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/giphy-preview.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
              "height": 84,
              "width": 100,
              "size": "47468",
              "url": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/giphy-preview.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
              "height": 84,
              "width": 100,
              "size": "35444",
              "url": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/giphy-preview.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
              "height": 400,
              "width": 480,
              "size": "5668620",
              "url": "https://media1.giphy.com/media/gnk3mpYb20kj32YNQl/480w_s.jpg?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
          }
      },
      "user": {
          "avatar_url": "https://media4.giphy.com/avatars/theoffice/UYGpbCVMjlBo.jpg",
          "banner_image": "https://media4.giphy.com/channel_assets/theoffice/rbxhsCcpp2DW.gif",
          "banner_url": "https://media4.giphy.com/channel_assets/theoffice/rbxhsCcpp2DW.gif",
          "profile_url": "https://giphy.com/theoffice/",
          "username": "theoffice",
          "display_name": "The Office",
          "description": "The official Giphy page for The Office on Peacock.",
          "instagram_url": "https://instagram.com/theoffice",
          "website_url": "https://www.peacocktv.com/",
          "is_verified": true,
          "suppress_chrome": false,
          "is_public": false
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWduazNtcFliMjBrajMyWU5RbCZjdD1n",
      "analytics": {
          "onload": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWduazNtcFliMjBrajMyWU5RbCZjdD1n&action_type=SEEN"
          },
          "onclick": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWduazNtcFliMjBrajMyWU5RbCZjdD1n&action_type=CLICK"
          },
          "onsent": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWduazNtcFliMjBrajMyWU5RbCZjdD1n&action_type=SENT"
          }
      },
      "alt_text": "",
      "tags": [],
      "bottle_data": {},
      "response_id": "hw7b4mh9le6dynsub6zytj806bv45azlbycpq033",
      "is_anonymous": false,
      "is_community": false,
      "is_featured": false,
      "is_hidden": false,
      "is_indexable": false,
      "is_preserve_size": false,
      "is_realtime": false,
      "is_removed": false,
      "is_dynamic": false
  },
  {
      "type": "gif",
      "id": "hNm9oANDvUdJ8Ge5l7",
      "url": "https://giphy.com/gifs/theoffice-hNm9oANDvUdJ8Ge5l7",
      "slug": "theoffice-hNm9oANDvUdJ8Ge5l7",
      "bitly_gif_url": "https://gph.is/g/4g7gqjA",
      "bitly_url": "https://gph.is/g/4g7gqjA",
      "embed_url": "https://giphy.com/embed/hNm9oANDvUdJ8Ge5l7",
      "username": "theoffice",
      "source": "",
      "title": "Angry Season 4 GIF by The Office",
      "rating": "pg",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "is_sticker": false,
      "import_datetime": "2020-12-05 07:52:03",
      "trending_datetime": "0000-00-00 00:00:00",
      "images": {
          "original": {
              "height": 400,
              "width": 480,
              "size": "4360465",
              "url": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g",
              "mp4_size": "1558170",
              "mp4": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/giphy.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
              "webp_size": "1474790",
              "webp": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/giphy.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.webp&ct=g",
              "frames": "61",
              "hash": "ce7b5b3b3b83ff279c597d77715f8c3d"
          },
          "downsized": {
              "height": 288,
              "width": 344,
              "size": "1711020",
              "url": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/giphy-downsized.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
              "height": 400,
              "width": 480,
              "size": "4360465",
              "url": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
              "height": 400,
              "width": 480,
              "size": "4360465",
              "url": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
              "height": 126,
              "width": 151,
              "mp4_size": "141158",
              "mp4": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/giphy-downsized-small.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
              "height": 288,
              "width": 344,
              "size": "33396",
              "url": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/giphy-downsized_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
              "height": 200,
              "width": 240,
              "size": "991530",
              "url": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/200.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.gif&ct=g",
              "mp4_size": "266519",
              "mp4": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/200.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.mp4&ct=g",
              "webp_size": "392280",
              "webp": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/200.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
              "height": 200,
              "width": 240,
              "size": "92545",
              "url": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/200_d.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_d.gif&ct=g",
              "webp_size": "65702",
              "webp": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/200_d.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
              "height": 100,
              "width": 120,
              "size": "340355",
              "url": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/100.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.gif&ct=g",
              "mp4_size": "100724",
              "mp4": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/100.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.mp4&ct=g",
              "webp_size": "128382",
              "webp": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/100.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
              "height": 100,
              "width": 120,
              "size": "11889",
              "url": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/100_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
              "height": 200,
              "width": 240,
              "size": "34993",
              "url": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/200_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
              "height": 166,
              "width": 200,
              "size": "746902",
              "url": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/200w.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.gif&ct=g",
              "mp4_size": "212680",
              "mp4": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/200w.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.mp4&ct=g",
              "webp_size": "261560",
              "webp": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/200w.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
              "height": 166,
              "width": 200,
              "size": "72627",
              "url": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/200w_d.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
              "webp_size": "48826",
              "webp": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/200w_d.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
              "height": 84,
              "width": 100,
              "size": "257396",
              "url": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/100w.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.gif&ct=g",
              "mp4_size": "79078",
              "mp4": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/100w.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.mp4&ct=g",
              "webp_size": "101426",
              "webp": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/100w.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
              "height": 84,
              "width": 100,
              "size": "9208",
              "url": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/100w_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
              "height": 166,
              "width": 200,
              "size": "25890",
              "url": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/200w_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_s.gif&ct=g"
          },
          "looping": {
              "mp4_size": "5698061",
              "mp4": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/giphy-loop.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g",
              "width": null,
              "height": null
          },
          "original_still": {
              "height": 400,
              "width": 480,
              "size": "136529",
              "url": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/giphy_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
              "height": 400,
              "width": 480,
              "mp4_size": "1558170",
              "mp4": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/giphy.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.mp4&ct=g"
          },
          "preview": {
              "height": 90,
              "width": 107,
              "mp4_size": "45245",
              "mp4": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/giphy-preview.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
              "height": 84,
              "width": 100,
              "size": "39297",
              "url": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/giphy-preview.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
              "height": 84,
              "width": 100,
              "size": "27752",
              "url": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/giphy-preview.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
              "height": 400,
              "width": 480,
              "size": "4360465",
              "url": "https://media3.giphy.com/media/hNm9oANDvUdJ8Ge5l7/480w_s.jpg?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
          }
      },
      "user": {
          "avatar_url": "https://media4.giphy.com/avatars/theoffice/UYGpbCVMjlBo.jpg",
          "banner_image": "https://media4.giphy.com/channel_assets/theoffice/rbxhsCcpp2DW.gif",
          "banner_url": "https://media4.giphy.com/channel_assets/theoffice/rbxhsCcpp2DW.gif",
          "profile_url": "https://giphy.com/theoffice/",
          "username": "theoffice",
          "display_name": "The Office",
          "description": "The official Giphy page for The Office on Peacock.",
          "instagram_url": "https://instagram.com/theoffice",
          "website_url": "https://www.peacocktv.com/",
          "is_verified": true,
          "suppress_chrome": false,
          "is_public": false
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWhObTlvQU5EdlVkSjhHZTVsNyZjdD1n",
      "analytics": {
          "onload": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWhObTlvQU5EdlVkSjhHZTVsNyZjdD1n&action_type=SEEN"
          },
          "onclick": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWhObTlvQU5EdlVkSjhHZTVsNyZjdD1n&action_type=CLICK"
          },
          "onsent": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWhObTlvQU5EdlVkSjhHZTVsNyZjdD1n&action_type=SENT"
          }
      },
      "alt_text": "",
      "tags": [],
      "bottle_data": {},
      "response_id": "hw7b4mh9le6dynsub6zytj806bv45azlbycpq033",
      "is_anonymous": false,
      "is_community": false,
      "is_featured": false,
      "is_hidden": false,
      "is_indexable": false,
      "is_preserve_size": false,
      "is_realtime": false,
      "is_removed": false,
      "is_dynamic": false
  },
  {
      "type": "gif",
      "id": "blJ9Kr5p3WpuYC3j7o",
      "url": "https://giphy.com/gifs/theoffice-blJ9Kr5p3WpuYC3j7o",
      "slug": "theoffice-blJ9Kr5p3WpuYC3j7o",
      "bitly_gif_url": "https://gph.is/g/Zk7gleO",
      "bitly_url": "https://gph.is/g/Zk7gleO",
      "embed_url": "https://giphy.com/embed/blJ9Kr5p3WpuYC3j7o",
      "username": "theoffice",
      "source": "",
      "title": "Season 4 Michael GIF by The Office",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "is_sticker": false,
      "import_datetime": "2020-12-05 07:49:35",
      "trending_datetime": "0000-00-00 00:00:00",
      "images": {
          "original": {
              "height": 400,
              "width": 480,
              "size": "5826807",
              "url": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g",
              "mp4_size": "1713945",
              "mp4": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/giphy.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
              "webp_size": "1965558",
              "webp": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/giphy.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.webp&ct=g",
              "frames": "78",
              "hash": "0ab29ffeb100c246aedc23786b6a8539"
          },
          "downsized": {
              "height": 240,
              "width": 288,
              "size": "1848277",
              "url": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/giphy-downsized.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
              "height": 400,
              "width": 480,
              "size": "5826807",
              "url": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
              "height": 400,
              "width": 480,
              "size": "4444143",
              "url": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/giphy-downsized-medium.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-downsized-medium.gif&ct=g"
          },
          "downsized_small": {
              "height": 334,
              "width": 400,
              "mp4_size": "180338",
              "mp4": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/giphy-downsized-small.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
              "height": 240,
              "width": 288,
              "size": "28217",
              "url": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/giphy-downsized_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
              "height": 200,
              "width": 240,
              "size": "1453183",
              "url": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/200.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.gif&ct=g",
              "mp4_size": "309257",
              "mp4": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/200.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.mp4&ct=g",
              "webp_size": "625856",
              "webp": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/200.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
              "height": 200,
              "width": 240,
              "size": "110009",
              "url": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/200_d.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_d.gif&ct=g",
              "webp_size": "71786",
              "webp": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/200_d.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
              "height": 100,
              "width": 120,
              "size": "502436",
              "url": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/100.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.gif&ct=g",
              "mp4_size": "116644",
              "mp4": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/100.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.mp4&ct=g",
              "webp_size": "211722",
              "webp": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/100.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
              "height": 100,
              "width": 120,
              "size": "12670",
              "url": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/100_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
              "height": 200,
              "width": 240,
              "size": "37356",
              "url": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/200_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
              "height": 166,
              "width": 200,
              "size": "1095483",
              "url": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/200w.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.gif&ct=g",
              "mp4_size": "244734",
              "mp4": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/200w.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.mp4&ct=g",
              "webp_size": "424130",
              "webp": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/200w.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
              "height": 166,
              "width": 200,
              "size": "82627",
              "url": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/200w_d.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
              "webp_size": "54842",
              "webp": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/200w_d.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
              "height": 84,
              "width": 100,
              "size": "380926",
              "url": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/100w.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.gif&ct=g",
              "mp4_size": "94206",
              "mp4": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/100w.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.mp4&ct=g",
              "webp_size": "165150",
              "webp": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/100w.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
              "height": 84,
              "width": 100,
              "size": "9732",
              "url": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/100w_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
              "height": 166,
              "width": 200,
              "size": "27782",
              "url": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/200w_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_s.gif&ct=g"
          },
          "looping": {
              "mp4_size": "4545852",
              "mp4": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/giphy-loop.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g",
              "width": null,
              "height": null
          },
          "original_still": {
              "height": 400,
              "width": 480,
              "size": "127646",
              "url": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/giphy_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
              "height": 400,
              "width": 480,
              "mp4_size": "1713945",
              "mp4": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/giphy.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.mp4&ct=g"
          },
          "preview": {
              "height": 100,
              "width": 119,
              "mp4_size": "49067",
              "mp4": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/giphy-preview.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
              "height": 84,
              "width": 100,
              "size": "46284",
              "url": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/giphy-preview.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
              "height": 84,
              "width": 100,
              "size": "39956",
              "url": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/giphy-preview.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
              "height": 400,
              "width": 480,
              "size": "5826807",
              "url": "https://media1.giphy.com/media/blJ9Kr5p3WpuYC3j7o/480w_s.jpg?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
          }
      },
      "user": {
          "avatar_url": "https://media4.giphy.com/avatars/theoffice/UYGpbCVMjlBo.jpg",
          "banner_image": "https://media4.giphy.com/channel_assets/theoffice/rbxhsCcpp2DW.gif",
          "banner_url": "https://media4.giphy.com/channel_assets/theoffice/rbxhsCcpp2DW.gif",
          "profile_url": "https://giphy.com/theoffice/",
          "username": "theoffice",
          "display_name": "The Office",
          "description": "The official Giphy page for The Office on Peacock.",
          "instagram_url": "https://instagram.com/theoffice",
          "website_url": "https://www.peacocktv.com/",
          "is_verified": true,
          "suppress_chrome": false,
          "is_public": false
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWJsSjlLcjVwM1dwdVlDM2o3byZjdD1n",
      "analytics": {
          "onload": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWJsSjlLcjVwM1dwdVlDM2o3byZjdD1n&action_type=SEEN"
          },
          "onclick": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWJsSjlLcjVwM1dwdVlDM2o3byZjdD1n&action_type=CLICK"
          },
          "onsent": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWJsSjlLcjVwM1dwdVlDM2o3byZjdD1n&action_type=SENT"
          }
      },
      "alt_text": "",
      "tags": [],
      "bottle_data": {},
      "response_id": "hw7b4mh9le6dynsub6zytj806bv45azlbycpq033",
      "is_anonymous": false,
      "is_community": false,
      "is_featured": false,
      "is_hidden": false,
      "is_indexable": false,
      "is_preserve_size": false,
      "is_realtime": false,
      "is_removed": false,
      "is_dynamic": false
  },
  {
      "type": "gif",
      "id": "iQ9cGtyp2hKcOz8yvq",
      "url": "https://giphy.com/gifs/theoffice-iQ9cGtyp2hKcOz8yvq",
      "slug": "theoffice-iQ9cGtyp2hKcOz8yvq",
      "bitly_gif_url": "https://gph.is/g/Zl7glbk",
      "bitly_url": "https://gph.is/g/Zl7glbk",
      "embed_url": "https://giphy.com/embed/iQ9cGtyp2hKcOz8yvq",
      "username": "theoffice",
      "source": "",
      "title": "Season 4 Michael GIF by The Office",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "is_sticker": false,
      "import_datetime": "2020-12-05 07:49:30",
      "trending_datetime": "0000-00-00 00:00:00",
      "images": {
          "original": {
              "height": 400,
              "width": 480,
              "size": "1874436",
              "url": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g",
              "mp4_size": "574686",
              "mp4": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/giphy.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
              "webp_size": "513030",
              "webp": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/giphy.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.webp&ct=g",
              "frames": "18",
              "hash": "19712c520f3e81020c05f6b91a39d25c"
          },
          "downsized": {
              "height": 400,
              "width": 480,
              "size": "1874436",
              "url": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
              "height": 400,
              "width": 480,
              "size": "1874436",
              "url": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
              "height": 400,
              "width": 480,
              "size": "1874436",
              "url": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
              "height": 334,
              "width": 400,
              "mp4_size": "147755",
              "mp4": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/giphy-downsized-small.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
              "height": 400,
              "width": 480,
              "size": "1874436",
              "url": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/giphy_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
              "height": 200,
              "width": 240,
              "size": "415610",
              "url": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/200.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.gif&ct=g",
              "mp4_size": "77735",
              "mp4": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/200.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.mp4&ct=g",
              "webp_size": "181694",
              "webp": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/200.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
              "height": 200,
              "width": 240,
              "size": "152175",
              "url": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/200_d.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_d.gif&ct=g",
              "webp_size": "85968",
              "webp": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/200_d.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
              "height": 100,
              "width": 120,
              "size": "144484",
              "url": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/100.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.gif&ct=g",
              "mp4_size": "34763",
              "mp4": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/100.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.mp4&ct=g",
              "webp_size": "77474",
              "webp": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/100.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
              "height": 100,
              "width": 120,
              "size": "9193",
              "url": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/100_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
              "height": 200,
              "width": 240,
              "size": "25524",
              "url": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/200_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
              "height": 167,
              "width": 200,
              "size": "309658",
              "url": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/200w.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.gif&ct=g",
              "mp4_size": "64744",
              "mp4": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/200w.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.mp4&ct=g",
              "webp_size": "147172",
              "webp": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/200w.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
              "height": 167,
              "width": 200,
              "size": "131404",
              "url": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/200w_d.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
              "webp_size": "65336",
              "webp": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/200w_d.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
              "height": 84,
              "width": 100,
              "size": "101123",
              "url": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/100w.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.gif&ct=g",
              "mp4_size": "28451",
              "mp4": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/100w.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.mp4&ct=g",
              "webp_size": "60986",
              "webp": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/100w.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
              "height": 84,
              "width": 100,
              "size": "6765",
              "url": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/100w_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
              "height": 167,
              "width": 200,
              "size": "19288",
              "url": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/200w_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_s.gif&ct=g"
          },
          "looping": {
              "mp4_size": "5671722",
              "mp4": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/giphy-loop.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g",
              "width": null,
              "height": null
          },
          "original_still": {
              "height": 400,
              "width": 480,
              "size": "107858",
              "url": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/giphy_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
              "height": 400,
              "width": 480,
              "mp4_size": "574686",
              "mp4": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/giphy.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.mp4&ct=g"
          },
          "preview": {
              "height": 160,
              "width": 192,
              "mp4_size": "26601",
              "mp4": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/giphy-preview.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
              "height": 63,
              "width": 76,
              "size": "49590",
              "url": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/giphy-preview.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
              "height": 100,
              "width": 120,
              "size": "43370",
              "url": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/giphy-preview.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
              "height": 400,
              "width": 480,
              "size": "1874436",
              "url": "https://media0.giphy.com/media/iQ9cGtyp2hKcOz8yvq/480w_s.jpg?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
          }
      },
      "user": {
          "avatar_url": "https://media4.giphy.com/avatars/theoffice/UYGpbCVMjlBo.jpg",
          "banner_image": "https://media4.giphy.com/channel_assets/theoffice/rbxhsCcpp2DW.gif",
          "banner_url": "https://media4.giphy.com/channel_assets/theoffice/rbxhsCcpp2DW.gif",
          "profile_url": "https://giphy.com/theoffice/",
          "username": "theoffice",
          "display_name": "The Office",
          "description": "The official Giphy page for The Office on Peacock.",
          "instagram_url": "https://instagram.com/theoffice",
          "website_url": "https://www.peacocktv.com/",
          "is_verified": true,
          "suppress_chrome": false,
          "is_public": false
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWlROWNHdHlwMmhLY096OHl2cSZjdD1n",
      "analytics": {
          "onload": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWlROWNHdHlwMmhLY096OHl2cSZjdD1n&action_type=SEEN"
          },
          "onclick": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWlROWNHdHlwMmhLY096OHl2cSZjdD1n&action_type=CLICK"
          },
          "onsent": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWlROWNHdHlwMmhLY096OHl2cSZjdD1n&action_type=SENT"
          }
      },
      "alt_text": "",
      "tags": [],
      "bottle_data": {},
      "response_id": "hw7b4mh9le6dynsub6zytj806bv45azlbycpq033",
      "is_anonymous": false,
      "is_community": false,
      "is_featured": false,
      "is_hidden": false,
      "is_indexable": false,
      "is_preserve_size": false,
      "is_realtime": false,
      "is_removed": false,
      "is_dynamic": false
  },
  {
      "type": "gif",
      "id": "keQO5F5rBlfCvYIZxL",
      "url": "https://giphy.com/gifs/theoffice-keQO5F5rBlfCvYIZxL",
      "slug": "theoffice-keQO5F5rBlfCvYIZxL",
      "bitly_gif_url": "https://gph.is/g/4wD5nxk",
      "bitly_url": "https://gph.is/g/4wD5nxk",
      "embed_url": "https://giphy.com/embed/keQO5F5rBlfCvYIZxL",
      "username": "theoffice",
      "source": "",
      "title": "Season 4 Shrug GIF by The Office",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "is_sticker": false,
      "import_datetime": "2020-12-05 07:49:27",
      "trending_datetime": "0000-00-00 00:00:00",
      "images": {
          "original": {
              "height": 400,
              "width": 480,
              "size": "2180187",
              "url": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g",
              "mp4_size": "647006",
              "mp4": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/giphy.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
              "webp_size": "695670",
              "webp": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/giphy.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.webp&ct=g",
              "frames": "21",
              "hash": "4f95d1d5039d5cc8fe77ebdf98c203ef"
          },
          "downsized": {
              "height": 400,
              "width": 480,
              "size": "1319343",
              "url": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/giphy-downsized.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
              "height": 400,
              "width": 480,
              "size": "2180187",
              "url": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
              "height": 400,
              "width": 480,
              "size": "2180187",
              "url": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/giphy.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
              "height": 220,
              "width": 264,
              "mp4_size": "56840",
              "mp4": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/giphy-downsized-small.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
              "height": 400,
              "width": 480,
              "size": "65818",
              "url": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/giphy-downsized_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
              "height": 200,
              "width": 240,
              "size": "485023",
              "url": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/200.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.gif&ct=g",
              "mp4_size": "106997",
              "mp4": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/200.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.mp4&ct=g",
              "webp_size": "240194",
              "webp": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/200.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
              "height": 200,
              "width": 240,
              "size": "145779",
              "url": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/200_d.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_d.gif&ct=g",
              "webp_size": "89372",
              "webp": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/200_d.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
              "height": 100,
              "width": 120,
              "size": "162862",
              "url": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/100.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.gif&ct=g",
              "mp4_size": "41482",
              "mp4": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/100.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.mp4&ct=g",
              "webp_size": "87936",
              "webp": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/100.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
              "height": 100,
              "width": 120,
              "size": "8901",
              "url": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/100_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
              "height": 200,
              "width": 240,
              "size": "24091",
              "url": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/200_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
              "height": 167,
              "width": 200,
              "size": "359847",
              "url": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/200w.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.gif&ct=g",
              "mp4_size": "84737",
              "mp4": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/200w.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.mp4&ct=g",
              "webp_size": "186110",
              "webp": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/200w.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
              "height": 167,
              "width": 200,
              "size": "119602",
              "url": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/200w_d.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
              "webp_size": "67380",
              "webp": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/200w_d.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
              "height": 84,
              "width": 100,
              "size": "114916",
              "url": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/100w.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.gif&ct=g",
              "mp4_size": "32887",
              "mp4": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/100w.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.mp4&ct=g",
              "webp_size": "68058",
              "webp": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/100w.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
              "height": 84,
              "width": 100,
              "size": "6279",
              "url": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/100w_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
              "height": 167,
              "width": 200,
              "size": "17954",
              "url": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/200w_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=200w_s.gif&ct=g"
          },
          "looping": {
              "mp4_size": "5553595",
              "mp4": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/giphy-loop.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g",
              "width": null,
              "height": null
          },
          "original_still": {
              "height": 400,
              "width": 480,
              "size": "109955",
              "url": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/giphy_s.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
              "height": 400,
              "width": 480,
              "mp4_size": "647006",
              "mp4": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/giphy.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy.mp4&ct=g"
          },
          "preview": {
              "height": 160,
              "width": 192,
              "mp4_size": "32389",
              "mp4": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/giphy-preview.mp4?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
              "height": 64,
              "width": 77,
              "size": "49680",
              "url": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/giphy-preview.gif?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
              "height": 96,
              "width": 116,
              "size": "39084",
              "url": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/giphy-preview.webp?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
              "height": 400,
              "width": 480,
              "size": "2180187",
              "url": "https://media0.giphy.com/media/keQO5F5rBlfCvYIZxL/480w_s.jpg?cid=6b52df89hw7b4mh9le6dynsub6zytj806bv45azlbycpq033&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
          }
      },
      "user": {
          "avatar_url": "https://media4.giphy.com/avatars/theoffice/UYGpbCVMjlBo.jpg",
          "banner_image": "https://media4.giphy.com/channel_assets/theoffice/rbxhsCcpp2DW.gif",
          "banner_url": "https://media4.giphy.com/channel_assets/theoffice/rbxhsCcpp2DW.gif",
          "profile_url": "https://giphy.com/theoffice/",
          "username": "theoffice",
          "display_name": "The Office",
          "description": "The official Giphy page for The Office on Peacock.",
          "instagram_url": "https://instagram.com/theoffice",
          "website_url": "https://www.peacocktv.com/",
          "is_verified": true,
          "suppress_chrome": false,
          "is_public": false
      },
      "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWtlUU81RjVyQmxmQ3ZZSVp4TCZjdD1n",
      "analytics": {
          "onload": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWtlUU81RjVyQmxmQ3ZZSVp4TCZjdD1n&action_type=SEEN"
          },
          "onclick": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWtlUU81RjVyQmxmQ3ZZSVp4TCZjdD1n&action_type=CLICK"
          },
          "onsent": {
              "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02YjUyZGY4OWh3N2I0bWg5bGU2ZHluc3ViNnp5dGo4MDZidjQ1YXpsYnljcHEwMzMmZ2lmX2lkPWtlUU81RjVyQmxmQ3ZZSVp4TCZjdD1n&action_type=SENT"
          }
      },
      "alt_text": "",
      "tags": [],
      "bottle_data": {},
      "response_id": "hw7b4mh9le6dynsub6zytj806bv45azlbycpq033",
      "is_anonymous": false,
      "is_community": false,
      "is_featured": false,
      "is_hidden": false,
      "is_indexable": false,
      "is_preserve_size": false,
      "is_realtime": false,
      "is_removed": false,
      "is_dynamic": false
  }
];

export default function GiphySearch({ defaultSearch = '', onChangeGif }: { defaultSearch: string; onChangeGif: (gif: any) => void }) {
  const [gifs, setGifs] = useState(null as any);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState(defaultSearch);
  const [selectedGif, setSelectedGif] = useState({index: null, gifId: null, gif: null} as selectedGif);

  const GIPHY_API_KEY = '2c3ZO2E9gRO4m8IWuBXmQJWc6DmiXVqb';
  const giphyFetch = new GiphyFetch(GIPHY_API_KEY);


  const fetchGifByTerm = async () => {
    const MAX_SIZE = 9;
    setLoading(true);
    try {
    //   let { data } = await giphyFetch.search(`@theoffice ${search}`, {
    //     // rating: 'pg-13',
    //     limit: MAX_SIZE,
    //   });
    //   console.error({ data });
    //   // const index = Math.floor(Math.random() * Math.min(MAX_SIZE, data.length));

    //   if (data.length < MAX_SIZE) {
    //    const { data: nonOfficeData } = await giphyFetch.search(`${search}`, {
    //       // rating: 'pg-13',
    //       limit: MAX_SIZE,
    //     });

    //     console.error('here');

    //     data = data.concat(nonOfficeData);
    //   }

    const data = defaultGifs;

      setGifs(data);
    } catch (err) {
      setError('Failed to fetch GIF');
    } finally {
      setLoading(false);
    }
  };

  console.error(defaultSearch);
  console.error(search);
  console.error( { selectedGif });
  useEffect(() => {
    if (search) {
      fetchGifByTerm();
    }
  }, [search]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }


  return (
    <div>
      {!selectedGif.gifId ? (
        <div>
      <input onChange={(e) => { const value = (e?.target as HTMLInputElement).value; console.error(value); setSearch(value);}}>Gif Search</input><br /><br />
      {gifs ? gifs.map((gif: any, key: any) => (
        <GiphyComponent onClick={(e) => {
          const index = (e?.target as HTMLInputElement)?.id;
          console.error(index);
          console.error({gifs});
          setSelectedGif({ index, gifId: gifs[index].id, gif: gifs[index] });
          onChangeGif(gifs[index]);
        }} 
        index={key}
        gifId={gif.id}
        />
      )) : (
        <p>No GIF found</p>
      )}
      </div>
    ) : (<div>
      <GiphyComponent gifId={selectedGif.gifId} />
      <button onClick={(e) => {
        setSelectedGif({index: null, gifId: null, gif: null});
        onChangeGif(null)
        setSearch("");
      }}>Cancel</button>
    </div>)}
    </div>
  );

}
