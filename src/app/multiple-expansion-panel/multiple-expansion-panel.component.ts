import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";
import { SelectItem, PrimeNGConfig } from "primeng/api";
import { CountryService } from "../../app/services/country.service";
import { Console } from 'console';

@Component({
  selector: 'app-multiple-expansion-panel',
  templateUrl: './multiple-expansion-panel.component.html',
  styleUrls: ['./multiple-expansion-panel.component.scss']
})
export class MultipleExpansionPanelComponent implements OnInit {

  panelitems: TestExpansion[] = [];
  selectedCities: string[] = [];
  selectedCountries1: string[] = [];
  selectedCountries2: string[] = [];
  items: SelectItem[];
  item: string;
  cities: any[];
  countries: any[];
  constructor(private countryService: CountryService,
    private primengConfig: PrimeNGConfig) { 
    this.items = [];

    this.countryService.getCountries().then(countries => {
      this.items = countries;
    });

    this.countries = [
      { name: "Australia", code: "AU" },
      { name: "Brazil", code: "BR" },
      { name: "China", code: "CN" },
      { name: "Egypt", code: "EG" },
      { name: "France", code: "FR" },
      { name: "Germany", code: "DE" },
      { name: "India", code: "IN" },
      { name: "Japan", code: "JP" },
      { name: "Spain", code: "ES" },
      { name: "United States", code: "US" }
    ];

    this.cities = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" }
    ];
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  addPanel() {
    this.panelitems.push(new TestExpansion());
  }
  savePanel(){
    console.log(this.panelitems);
  }

}

export class TestExpansion {
  Name: string;
  Cities: any[];
}
