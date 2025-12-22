import { Country } from "../types/country";

export async function getCountries() {
  const res = await fetch("/api/countries");

  if (!res.ok) {
    throw new Error("Failed making request to fetch countries");
  }

  return res.json();
}

export async function deleteCountry(id : number) {
  const res = await fetch("/api/countries/" + id, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed making request to delete country");
  }

  return res.json();
}

export async function getCountryById(id : number) {
  const res = await fetch("/api/countries/" + id, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed making request to fetch country");
  }

  return res.json();
}

export async function updateCountry(country: Country) {
  const res = await fetch("/api/countries/" + country.id, {
    method: "POST",
    body: JSON.stringify(country),
  });

  if (!res.ok) {
    throw new Error("Failed making request to update country");
  }

  return res.json();
}

export async function createCountry(country: Country) {
  const res = await fetch("/api/countries/", {
    method: "POST",
    body: JSON.stringify(country),
  });

  if (!res.ok) {
    throw new Error("Failed making request to create country");
  }

  return res.json();
}