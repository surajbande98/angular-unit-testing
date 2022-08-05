import { HttpClient } from '@angular/common/http';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';

import { HomeService } from './home.service';

describe('HomeService', () => {
  let homeService: HomeService;
  let httpClientSpy: { get: jasmine.Spy };
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HomeService,
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    });
    homeService = TestBed.inject(HomeService);
  });

  it('should be created', () => {
    expect(homeService).toBeTruthy();
  });

  it('call getCities()', fakeAsync(() => {
    const testData = [
      {
        name: 'trulli',
        image: 'pic_trulli.jpg',
        alt: 'Italian Trulli',
      },
      {
        name: 'chania',
        image: 'img_chania.jpg',
        alt: 'Chania',
      },
    ];

    httpClientSpy.get.and.returnValue(of(testData));

    homeService.getCities().subscribe((data) => {
      expect(data).toEqual(testData);
    });
    tick();
  }));
});
