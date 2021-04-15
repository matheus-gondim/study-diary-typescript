interface Corporation {
  legalName: string;
  phone: string;
  email: string;
  federalDocument: string;
  corporateType: string;
  annualGrossRevenue: number;
  site?: string;
  address: Address;
  bankData: BankData;
  legalRepresentative: LegalRepresentative;
}

interface Individual {
  estadoCivil: string;
  dataDeNascimento: Date;
  nacionalidade: string;
  profissao: string;

  legalName: string;
  phone: string;
  email: string;
  federalDocument: string;
  address: Address;
  bankData: BankData;
}

type BankData = {
  name: string;
  account: string;
  agency: string;
};

type LegalRepresentative = {
  ci: string;
  orgaoExpedidor: string;

  legalName: string;
  phone: string;
  email: string;
  federalDocument: string;
};

type Address = {
  postalCode: string;
  city: string;
  uf: string;
  location: string;
  number: string;
  additionalInfo: string;
  district: string;
};
