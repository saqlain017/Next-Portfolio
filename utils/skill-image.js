import bootstrap from '/public/svg/skills/bootstrap.svg';
import css from '/public/svg/skills/css.svg';
import figma from '/public/svg/skills/figma.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import javascript from '/public/svg/skills/javascript.svg';
import materialui from '/public/svg/skills/materialui.svg';
import microsoftoffice from '/public/svg/skills/microsoftoffice.svg';
import mysql from '/public/svg/skills/mysql.svg';
import nextJS from '/public/svg/skills/nextJS.svg';
import react from '/public/svg/skills/react.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import typescript from '/public/svg/skills/typescript.svg';
import vitejs from '/public/svg/skills/vitejs.svg';
import vue from '/public/svg/skills/vue.svg';
import nodejs from '/public/svg/skills/nodejs.svg'
import mongodb from '/public/svg/skills/mongoDB.svg'

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'typescript':
      return typescript;
    case 'vue':
      return vue;
    case 'bootstrap':
      return bootstrap;
    case 'materialui':
      return materialui;
    case 'git':
      return git;
    case 'mongo db':
      return mongodb;
    case 'mysql':
      return mysql;
    case 'microsoft office':
      return microsoftoffice;
    case 'figma':
      return figma;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'node js':
      return nodejs
    default:
      return null;
  }
}
