import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChatComponent } from './pages/chat/chat.component';
import { SeriesComponent } from './pages/series/series.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthComponent } from './pages/auth/auth.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { FechasComponent } from './pages/fechas/fechas.component';
import { ChapterComponent } from './pages/chapter/chapter.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'inicio',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'series',
    component: SeriesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'series/nueva',
    component: SeriesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'series/:serie-name',
    component: PlaylistComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'series/:serie-name/:chapter-number',
    component: ChapterComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'galeria',
    component: GalleryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'fechas',
    component: FechasComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: '**',
    redirectTo: '',
    canActivate: [AuthGuard],
  },
];
