import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryPageModule)
  },
  {
    path: 'bookmark',
    loadChildren: () => import('./pages/bookmark/bookmark.module').then(m => m.BookmarkPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'recent-news',
    loadChildren: () => import('./pages/recent-news/recent-news.module').then(m => m.RecentNewsPageModule)
  },
  {
    path: 'single-page',
    loadChildren: () => import('./pages/single-page/single-page.module').then(m => m.SinglePageModule)
  },
  {
    path: 'form-page',
    loadChildren: () => import('./pages/form/form.module').then(m => m.FormPageModule)
  },
  {
    path: 'comment-page',
    loadChildren: () => import('./pages/comments/comments.module').then(m => m.CommentsPageModule)
  },
  {
    path: 'intro-page',
    loadChildren: () => import('./pages/intro-page/intro-page.module').then(m => m.IntroPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
