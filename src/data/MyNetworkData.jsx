import connection from "../../public/myNetworkSvg/connection.svg";
import follower from "../../public/myNetworkSvg/follower.svg";
import groups from "../../public/myNetworkSvg/groups.svg";
import events from "../../public/myNetworkSvg/events.svg";
import pages from "../../public/myNetworkSvg/pages.svg";
import newsLetter from "../../public/myNetworkSvg/news.svg";
import hashtag from "../../public/myNetworkSvg/hashtag.svg";

export const networkData = [
  {
    icon: connection,
    section: "Connections",
    count: "",
    render: "/mynetwork/connections",
  },
  {
    icon: follower,
    section: "Following & Followers",
    count: "",
    render: "/mynetwork/followingandfollowers",
  },
  {
    icon: groups,
    section: "Groups",
    count: "",
    render: "/mynetwork/groups",
  },
  {
    icon: events,
    section: "Events",
    count: "",
    render: "/mynetwork/events",
  },
  {
    icon: pages,
    section: "Pages",
    count: "",
    render: "/mynetwork/pages",
  },
  {
    icon: newsLetter,
    section: "Newsletters",
    count: "",
    render: "/mynetwork/newsletters",
  },
  {
    icon: hashtag,
    section: "Hashtags",
    count: "",
    render: "/mynetwork/hashtags",
  },
];
