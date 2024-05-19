import { type Path, pathToRegexp } from 'path-to-regexp';

export const paths = {
  toRegexp: (path: Path) => {
    try {
      return pathToRegexp(path);
    } catch (e) {
      const error = e as Error;
      throw new Error(
        `Invalid path: ${path}.
Consult the documentation of path-to-regexp here: https://github.com/pillarjs/path-to-regexp
${error.message}`
      );
    }
  },
};
