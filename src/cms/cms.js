import React from "react";
import CMS from "netlify-cms";
import "netlify-cms/dist/cms.css";
import netlifyIdentity from 'netlify-identity-widget'
import { CustomPathImageControl, CustomPathImagePreview } from "./customPathImage.js";

netlifyIdentity.init();
netlifyIdentity.on("login", user => window.location.reload(false));

CMS.registerWidget("custompathimage", CustomPathImageControl, CustomPathImagePreview);
