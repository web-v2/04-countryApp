import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent implements OnInit {
  public country?: Country;

  constructor(
    private activatedRouter: ActivatedRoute,
    private CountriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRouter.params
      .pipe(
        switchMap(({ id }) =>
          this.CountriesService.searchCountryByAlphaCode(id)
        )
      )
      .subscribe((country) => {
        if (!country) return this.router.navigateByUrl('');
        this.country = country;
        return;
      });
  }
}
