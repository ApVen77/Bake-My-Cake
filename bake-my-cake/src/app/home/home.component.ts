import { Cake } from '../models/cakes';
import { outputAst } from '@angular/compiler';
import { Component } from '@angular/core';
import { CakeRouterService } from '../services/cake-router-service';
import { CakeService } from '../services/cakes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
