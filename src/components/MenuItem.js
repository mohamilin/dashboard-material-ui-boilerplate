import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import React from "react";

export const menuItem = [
  {
    icon: <HomeRoundedIcon />,
    title: "Dashboard",
    href:'/',
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
        href: '/kelas',
        items: []
      },
      {
        title: "Kelas Pararel",
        href: '/kelas-pararel',
        items: []
      },
      {
        title: "Wali Kelas",
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
    title: "Blog"
  }
];
