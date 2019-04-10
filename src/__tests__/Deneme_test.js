import React from 'react';
import {shallow} from 'enzyme';
import checkPropTypes from 'check-prop-types';
import SearchBox from '../Components/SearchBox';
import jest from 'jest-mock';
import renderer from 'react-test-renderer';

describe('<SearchBox /> component', () => {
    beforeEach(() => {
        const props = {
            setActive: () => {},
            handleChange: () => {},
            resetSearch: () => {},
            delayedCallBack: () => {}
        };
    });

    const checkProps = (component, expectedProps) => {
        const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
        return propsErr;
    };
    it('should render without error', () => {
        const component = shallow(<SearchBox/>);
        const wrapper = component.find(`[data-test='search-box']`);
        expect(wrapper.length).toBe(1)
    });
    it('should render without error', () => {
        const component = shallow(<SearchBox/>);
        const wrapper = component.find(`[data-test='input-search']`);
        expect(wrapper.length).toBe(1)
    });

    describe('Checking propTypes', () => {
        it('should not throw a warning', () => {
            const expectedProps = {
                setActive: () => {},
                handleChange: () => {},
                resetSearch: () => {},
                delayedCallBack: () => {
                }
            };
            const propsError = checkProps(SearchBox, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('renders ReviewStarRating element', () => {
        it('should not return error', () => {
            const component = renderer.create(
                <SearchBox/>
            );
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('testing api get fetching', () => {
        const mockAxios = {
            get: jest.fn(() => Promise.resolve({data: {}}))
        }
        mockAxios.create = jest.fn(() => mockAxios);

        const mockData = {
            "search": "default",
            "suggestions": [
                {
                    "searchterm": "heren truien",
                    "nrResults": 1100
                },
                {
                    "searchterm": "dames truien",
                    "nrResults": 1501
                }
            ]
        };
         mockAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({data: mockData})
        });
         expect(mockAxios.get()).toBeTruthy();
    });
});