"use client";

import { Country } from "../types/country";
import { ApiResult, makeRequest } from "./request";

export async function getCountries(): Promise<ApiResult<Country[]>> {
  var response = await makeRequest<Country[]>("/api/countries", "GET");
  return response;
}

export async function deleteCountry(id: number): Promise<ApiResult<boolean>> {
  var response = await makeRequest<boolean>("/api/countries/" + id, "DELETE");
  return response;
}

export async function getCountryById(id: number): Promise<ApiResult<Country>> {
  var response = await makeRequest<Country>("/api/countries/" + id, "GET");
  return response;
}

export async function updateCountry(country: Country): Promise<ApiResult<Country>> {
  var response = await makeRequest<Country>("/api/countries/" + country.id, "POST", JSON.stringify(country));
  return response;
}

export async function createCountry(country: Country): Promise<ApiResult<Country>> {
  var response = await makeRequest<Country>("/api/countries/", "POST", JSON.stringify(country));
  return response;
}