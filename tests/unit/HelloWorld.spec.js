import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {

  afterEach(() => {
    window.pageYOffset = 0;
  });

  it('top banner is sticky when scrolled past top', async () => {
    const localVue = createLocalVue();
    const wrapper = shallowMount(HelloWorld, {
      localVue,
      attachToDocument: true,
    });
    const dBanner = wrapper.find('#topB')
    window.pageYOffset = 2000;

    wrapper.vm.topBResize();
    expect(dBanner.classes()).to.contain('sticky')
  });

  it('top banner not sticky when scrolled below top', async () => {
    const localVue = createLocalVue();
    const wrapper = shallowMount(HelloWorld, {
      localVue,
      attachToDocument: true,
    });
    const dBanner = wrapper.find('#topB')
    window.pageYOffset = 0;

    wrapper.vm.topBResize();
    expect(dBanner.classes()).to.not.contain('sticky')
  });
});
