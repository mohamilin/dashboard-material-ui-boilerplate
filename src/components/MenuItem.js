import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import React from "react";

export const menuItem = [
  {
    icon: <HomeRoundedIcon />,
    title: "Dashboard",
    href:'/dashboard',
    items: []
  },
  {
    icon: <LocalLibraryRoundedIcon />,
    title: "General Data",
    items: [
      {
        title: "Tahun Pelajaran",
        href: '/general/tahun-pelajaran'
      },
      {
        title: "Kelas",
        href: '/general/kelas',
        items: []
      },
      {
        title: "Kelas Pararel",
        href: '/general/kelas-pararel',
        items: []
      },
      {
        title: "Wali Kelas",
        href: '/general/wali-kelas',
        items: []
      },
      {
        title: "Data Users",
        href: '/general/users',
        items: []
      }
    ]
  },
  // {
  //   icon: <LocalLibraryOutlinedIcon />,
  //   title: "Education",
  //   items: [
  //     {
  //       title: "Technical Analysis",
  //       items: [
  //         {
  //           title: "The Dow Theory",
  //           to: "/thedowtheory"
  //         },
  //         {
  //           title: "Charts & Chart Patterns",
  //           to: "/chart"
  //         },
  //         {
  //           title: "Trend & Trend Lines",
  //           to: "/trendlines"
  //         },
  //         {
  //           title: "Support & Resistance",
  //           to: "/sandr"
  //         }
  //       ]
  //     },
  //     {
  //       title: "Fundamental Analysis",
  //       items: [
  //         {
  //           title: "The Dow Theory",
  //           to: "/thedowtheory"
  //         },
  //         {
  //           title: "Charts & Chart Patterns",
  //           to: "/chart"
  //         },
  //         {
  //           title: "Trend & Trend Lines",
  //           to: "/trendlines"
  //         },
  //         {
  //           title: "Support & Resistance",
  //           to: "/sandr"
  //         }
  //       ]
  //     },
  //     {
  //       title: "Elliot Wave Analysis",
  //       items: [
  //         {
  //           title: "The Dow Theory",
  //           to: "/thedowtheory"
  //         },
  //         {
  //           title: "Charts & Chart Patterns",
  //           to: "/chart"
  //         },
  //         {
  //           title: "Trend & Trend Lines",
  //           to: "/trendlines"
  //         },
  //         {
  //           title: "Support & Resistance",
  //           to: "/sandr"
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    icon: <TimelineOutlinedIcon />,
    href: '/data-siswa',
    title: "Data Siswa"
  },
  {
    icon: <DescriptionOutlinedIcon />,
    href: '/blog',
    title: "Blog"
  }
];
