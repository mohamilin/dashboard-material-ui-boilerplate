import React, { useState } from "react";
import {  Outlet, useNavigate } from "react-router-dom";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import List from "@mui/material/List";

import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { menuItem } from "./MenuItem";
import { hasChildren } from "../utlis/hasChildren";

const MultiMenu = ({ item }) => {
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child, key) => (
            <ContainerMenu key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </>
  );
};

const SingleMenu = ({ item }) => {
  const navigate = useNavigate();

  return (
    <>
      <ListItemButton onClick={() => navigate(item.href)}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItemButton>
      <Outlet />
    </>
  );
};

const ContainerMenu = ({ item }) => {
  const Component = hasChildren(item) ? MultiMenu : SingleMenu;
  return <Component item={item} />;
};
export default function Sidebar() {
  return menuItem.map((item, key) => <ContainerMenu key={key} item={item} />);
}
