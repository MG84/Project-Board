'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('mtg project Board', function() {


  it('should automatically redirect to /team when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/team");
  });


  /* Tests for team */

  describe('team', function() {

    beforeEach(function() {
      browser.get('index.html#/team');
    });

  });

  /* Tests for sprint list */

  describe('sprint list view', function() {

    beforeEach(function() {
      browser.get('index.html#/sprint');
    });


    it('should filter the sprint list as the user types into the search box', function() {
      var sprintList = element.all(by.repeater('sprint in sprints'));
      var query = element(by.model('query'));

      expect(sprintList.count()).toBe(2);

      query.sendKeys('retrieve');
      expect(sprintList.count()).toBe(1);

      query.clear();

      query.sendKeys('work');
      expect(sprintList.count()).toBe(1);

      query.clear();
      query.sendKeys('08');
      expect(sprintList.count()).toBe(2);
    });

    it('should render sprint specific links', function(){
      var query = element(by.model('query'));
      query.sendKeys('retrieve');
      element(by.css('.sprint-box a')).click();
      browser.getLocationAbsUrl().then(function(url){
        expect(url).toEqual('/sprint/1');
      });

    });

  });

  /* Tests for sprint detail */

  describe('sprint detail view', function() {

    beforeEach(function(){
      browser.get('index.html#/sprint/1')
    });

    it('should display a sprint detail page with 6 stories', function() {
      var storiesList = element.all(by.repeater('story in stories'));
      expect(storiesList.count()).toBe(6);
    });

  });

  /* Tests for resources */

  describe('resources', function() {

    beforeEach(function() {
      browser.get('index.html#/resources');
    });


    it('should filter the resources list as the user types into the search box', function() {
      var resourcesList = element.all(by.repeater('resource in resources'));
      var query = element(by.model('query'));

      expect(resourcesList.count()).toBe(2);

      query.sendKeys('#1');
      expect(resourcesList.count()).toBe(1);

      query.clear();

      query.sendKeys('#2');
      expect(resourcesList.count()).toBe(1);

      query.clear();

      query.sendKeys('resource');
      expect(resourcesList.count()).toBe(2);
    });

  });



});
