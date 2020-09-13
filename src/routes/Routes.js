const _Route = class {
  constructor(props) {
    Object.assign(this, props);
  }

  format(...args) {
    let formattedPath = this.path;
    args.forEach(a => formattedPath = formattedPath.replace(/:[^/]+/, a));
    return formattedPath;
  }
};

const Routes = {
  repository: new _Route({ path: '/repository/:userName/:repoName' }),
  searchRepository: new _Route({ path: '/', title: 'Search repositories' }),
  repositoriesList: new _Route({ path: '/repositories', title: 'Repositories' }),
  favRepositoriesList: new _Route({ path: '/repositories/favorites', title: 'Favorites repositories' })
}

export { Routes };
