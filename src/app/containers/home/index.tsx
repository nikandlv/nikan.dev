import {
  Avatar,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { blue, green, indigo, teal, yellow } from "@material-ui/core/colors";
import { EmailOutlined, PhoneOutlined } from "@material-ui/icons";

import GithubIcon from "icons/GithubIcon";
import LinkedinIcon from "icons/LinkedinIcon";
import TwitterIcon from "icons/TwitterIcon";

import * as React from "react";

export interface IHomePageProps {}

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
    width: 200,
    height: 200,
    margin: "0 auto",
  },
}));

const links = [
  {
    title: "My Github account",
    value: "github.com/nikandlv",
    link: "https://github.com/nikandlv",
    icon: GithubIcon,
    fill: teal[500],
  },
  {
    title: "My Twitter",
    value: "twitter.com/Nikandlv",
    link: "https://twitter.com/Nikandlv",
    icon: TwitterIcon,
    fill: blue[500],
  },
  {
    title: "My Linkedin profile",
    value: "in/nikan-dalvand-8a3a49142",
    link: "https://www.linkedin.com/in/nikan-dalvand-8a3a49142/",
    icon: LinkedinIcon,
    fill: indigo[500],
  },
  {
    title: "Phonenumber",
    value: "09 300 450 500",
    link: "tel:09300450500",
    icon: PhoneOutlined,
    fill: green[500],
  },
  {
    title: "Email Address",
    value: "nikandalvand@gmail.comm",
    link: "mail:nikandalvand@gmail.comm",
    icon: EmailOutlined,
    fill: yellow[500],
  },
];

export default function HomePage(_: IHomePageProps) {
  const classes = useStyles();

  return (
    <CardContent component="section">
      <Avatar className={classes.avatar} src="/images/profile.jpeg">
        ND
      </Avatar>
      <br />
      <Typography variant="h6" component="h1" align="center">
        Nikan dalvand
      </Typography>
      <Typography variant="subtitle1" component="h2" align="center">
        Senior frontend developer
      </Typography>
      <List>
        {links.map((link) => (
          <ListItem
            key={link.link}
            button
            component="a"
            href={link.link}
            target="_blank"
          >
            <ListItemIcon>
              {<link.icon style={{ color: link.fill }} />}
            </ListItemIcon>
            <ListItemText primary={link.title} secondary={link.value} />
          </ListItem>
        ))}
      </List>
    </CardContent>
  );
}
