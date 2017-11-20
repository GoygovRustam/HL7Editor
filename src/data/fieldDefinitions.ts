import { FieldDefinition } from '../models/FieldDefinition';

export class FieldDefinitions{
    public static getFieldDefinition(fieldName:string){
        return this.fields[fieldName];
    }

    //HL7 Version 2.6
    static fields = {
        //ACC: Accident
        "ACC":new FieldDefinition("Accident"),

        "ACC-1":new FieldDefinition("Accident Date/Time",24),
        "ACC-2":new FieldDefinition("Accident Code",250),	
        "ACC-3":new FieldDefinition("Accident Location",25),	
        "ACC-4":new FieldDefinition("Auto Accident State",250),	
        "ACC-5":new FieldDefinition("Accident Job Related Indicator",1),	
        "ACC-6":new FieldDefinition("Accident Death Indicator",12),	
        "ACC-7":new FieldDefinition("Entered By",3220),
        "ACC-8":new FieldDefinition("Accident Description",25),	
        "ACC-9":new FieldDefinition("Brought In By",80),	
        "ACC-10":new FieldDefinition("Police Notified Indicator",1),
        "ACC-11":new FieldDefinition("Accident Address",250),	

        //DG1: Diagnosis
        "DG1":new FieldDefinition("Diagnosis"),	
        "DG1-1":new FieldDefinition("Set ID - DG1",4),	
        "DG1-2":new FieldDefinition("Diagnosis Coding Method",2),	
        "DG1-3":new FieldDefinition("Diagnosis Code - DG1",250),	
        "DG1-4":new FieldDefinition("Diagnosis Description",40),	
        "DG1-5":new FieldDefinition("Diagnosis Date/Time",26),	
        "DG1-6":new FieldDefinition("Diagnosis Type",2),	
        "DG1-7":new FieldDefinition("Major Diagnostic Category",250),	
        "DG1-8":new FieldDefinition("Diagnostic Related Group",250),	
        "DG1-9":new FieldDefinition("DRG Approval Indicator",1),	
        "DG1-10":new FieldDefinition("DRG Grouper Review Code",2),	
        "DG1-11":new FieldDefinition("Outlier Type",250),	
        "DG1-12":new FieldDefinition("Outlier Days",3),	
        "DG1-13":new FieldDefinition("Outlier Cost",12),	
        "DG1-14":new FieldDefinition("Grouper Version And Type",4),	
        "DG1-15":new FieldDefinition("Diagnosis Priority",2),	
        "DG1-16":new FieldDefinition("Diagnosing Clinician",250),	
        "DG1-17":new FieldDefinition("Diagnosis Classification",3),	
        "DG1-18":new FieldDefinition("Confidential Indicator",1),	
        "DG1-19":new FieldDefinition("Attestation Date/Time",24),	
        "DG1-20":new FieldDefinition("Diagnosis Identifier",427),	
        "DG1-21":new FieldDefinition("Diagnosis Action Code",1),	
        "DG1-22":new FieldDefinition("Parent Diagnosis",427),	
        "DG1-23":new FieldDefinition("DRG CCL Value Code",705),	
        "DG1-24":new FieldDefinition("DRG Grouping Usage",20),	
        "DG1-25":new FieldDefinition("DRG Diagnosis Determination Status",20),	
        "DG1-26":new FieldDefinition("Present On Admission (POA) Indicator",1),	

        //EVN: Event Type
        "EVN": new FieldDefinition("Event Type"),
           
        "EVN-1": new FieldDefinition("Event Type Code", 3),
        "EVN-2": new FieldDefinition("Recorded Date/Time", 24),
        "EVN-3": new FieldDefinition("Date/Time Planned Event", 24),
        "EVN-4": new FieldDefinition("Event Reason Code", 3),
        "EVN-5": new FieldDefinition("Operator ID", 250),
        "EVN-6": new FieldDefinition("Event Occurred", 24),
        "EVN-7": new FieldDefinition("Event Facility",241),
        
        //IN1: Insurance
        "IN1":new FieldDefinition("Insurance"),

        "IN1-1":new FieldDefinition(" Set ID - IN1 ", 4 ),
        "IN1-2":new FieldDefinition(" Insurance Plan ID ", 250 ),
        "IN1-3":new FieldDefinition(" Insurance Company ID ", 250 ),
        "IN1-4":new FieldDefinition(" Insurance Company Name ", 250 ),
        "IN1-5":new FieldDefinition(" Insurance Company Address ", 250 ),
        "IN1-6":new FieldDefinition(" Insurance Co Contact Person ", 250 ),
        "IN1-7":new FieldDefinition(" Insurance Co Phone Number ", 250 ),
        "IN1-8":new FieldDefinition(" Group Number ", 12 ),
        "IN1-9":new FieldDefinition(" Group Name ", 250 ),
        "IN1-10":new FieldDefinition(" Insured's Group Emp ID ", 250 ),
        "IN1-11":new FieldDefinition(" Insured's Group Emp Name ", 250 ),
        "IN1-12":new FieldDefinition(" Plan Effective Date ", 8 ),
        "IN1-13":new FieldDefinition(" Plan Expiration Date ", 8 ),
        "IN1-14":new FieldDefinition(" Authorization Information ", 239 ),
        "IN1-15":new FieldDefinition(" Plan Type ", 3 ),
        "IN1-16":new FieldDefinition(" Name Of Insured ", 250 ),
        "IN1-17":new FieldDefinition(" Insured's Relationship To Patient", 250 ),
        "IN1-18":new FieldDefinition(" Insured's Date Of Birth ", 24 ),
        "IN1-19":new FieldDefinition(" Insured's Address ", 250 ),
        "IN1-20":new FieldDefinition(" Assignment Of Benefits ", 2 ),
        "IN1-21":new FieldDefinition(" Coordination Of Benefits ", 2 ),
        "IN1-22":new FieldDefinition(" Coord Of Ben. Priority ", 2 ),
        "IN1-23":new FieldDefinition(" Notice Of Admission Flag ", 1 ),
        "IN1-24":new FieldDefinition(" Notice Of Admission Date ", 8 ),
        "IN1-25":new FieldDefinition(" Report Of Eligibility Flag ", 1 ),
        "IN1-26":new FieldDefinition(" Report Of Eligibility Date ", 8 ),
        "IN1-27":new FieldDefinition(" Release Information Code ", 2 ),
        "IN1-28":new FieldDefinition(" Pre-Admit Cert ", 15 ),
        "IN1-29":new FieldDefinition(" Verification Date/Time ", 24 ),
        "IN1-30":new FieldDefinition(" Verification By ", 250 ),
        "IN1-31":new FieldDefinition(" Type Of Agreement Code ", 2 ),
        "IN1-32":new FieldDefinition(" Billing Status ", 2 ),
        "IN1-33":new FieldDefinition(" Lifetime Reserve Days ", 4 ),
        "IN1-34":new FieldDefinition(" Delay Before L.R. Day ", 4 ),
        "IN1-35":new FieldDefinition(" Company Plan Code ", 20 ),
        "IN1-36":new FieldDefinition(" Policy Number ", 15 ),
        "IN1-37":new FieldDefinition(" Policy Deductible ", 12 ),
        "IN1-38":new FieldDefinition(" Policy Limit - Amount ", 12 ),
        "IN1-39":new FieldDefinition(" Policy Limit - Days ", 4 ),
        "IN1-40":new FieldDefinition(" Room Rate - Semi-Private ", 12 ),
        "IN1-41":new FieldDefinition(" Room Rate - Private ", 12 ),
        "IN1-42":new FieldDefinition(" Insured's Employment Status ", 250 ),
        "IN1-43":new FieldDefinition(" Insured's Administrative Sex ", 1 ),
        "IN1-44":new FieldDefinition(" Insured's Employer's Address ", 250 ),
        "IN1-45":new FieldDefinition(" Verification Status ", 2 ),
        "IN1-46":new FieldDefinition(" Prior Insurance Plan ID ", 8 ),
        "IN1-47":new FieldDefinition(" Coverage Type ", 3 ),
        "IN1-48":new FieldDefinition(" Handicap ", 2 ),
        "IN1-49":new FieldDefinition(" Insured's ID Number ", 250 ),
        "IN1-50":new FieldDefinition(" Signature Code ", 1 ),
        "IN1-51":new FieldDefinition(" Signature Code Date ", 8 ),
        "IN1-52":new FieldDefinition(" Insured_s Birth Place ", 250 ),
        "IN1-53":new FieldDefinition(" VIP Indicator ", 2 ),

        //IN2: Insurance Additional Information
        "IN2":new FieldDefinition("Insurance Additional Information", 250 ),
        "IN2-1":new FieldDefinition("Insured's Employee ID", 250 ),
        "IN2-2":new FieldDefinition("Insured's Social Security Number", 11 ),
        "IN2-3":new FieldDefinition("Insured's Employer's Name and ID", 250 ),
        "IN2-4":new FieldDefinition("Employer Information Data", 1 ),
        "IN2-5":new FieldDefinition("Mail Claim Party", 1 ),
        "IN2-6":new FieldDefinition("Medicare Health Ins Card Number", 15 ),
        "IN2-7":new FieldDefinition("Medicaid Case Name", 250 ),
        "IN2-8":new FieldDefinition("Medicaid Case Number", 15 ),
        "IN2-9":new FieldDefinition("Military Sponsor Name", 250 ),
        "IN2-10":new FieldDefinition("Military ID Number", 20 ),
        "IN2-11":new FieldDefinition("Dependent Of Military Recipient", 250 ),
        "IN2-12":new FieldDefinition("Military Organization", 25 ),
        "IN2-13":new FieldDefinition("Military Station", 25 ),
        "IN2-14":new FieldDefinition("Military Service", 14 ),
        "IN2-15":new FieldDefinition("Military Rank/Grade", 2 ),
        "IN2-16":new FieldDefinition("Military Status", 3 ),
        "IN2-17":new FieldDefinition("Military Retire Date", 8 ),
        "IN2-18":new FieldDefinition("Military Non-Avail Cert On File", 1 ),
        "IN2-19":new FieldDefinition("Baby Coverage", 1 ),
        "IN2-20":new FieldDefinition("Combine Baby Bill", 1 ),
        "IN2-21":new FieldDefinition("Blood Deductible", 1 ),
        "IN2-22":new FieldDefinition("Special Coverage Approval Name", 250 ),
        "IN2-23":new FieldDefinition("Special Coverage Approval Title", 30 ),
        "IN2-24":new FieldDefinition("Non-Covered Insurance Code", 8 ),
        "IN2-25":new FieldDefinition("Payor ID", 250 ),
        "IN2-26":new FieldDefinition("Payor Subscriber ID", 250 ),
        "IN2-27":new FieldDefinition("Eligibility Source", 1 ),
        "IN2-28":new FieldDefinition("Room Coverage Type/Amount", 82 ),
        "IN2-29":new FieldDefinition("Policy Type/Amount", 56 ),
        "IN2-30":new FieldDefinition("Daily Deductible", 25 ),
        "IN2-31":new FieldDefinition("Living Dependency", 2 ),
        "IN2-32":new FieldDefinition("Ambulatory Status", 2 ),
        "IN2-33":new FieldDefinition("Citizenship", 705 ),
        "IN2-34":new FieldDefinition("Primary Language", 705 ),
        "IN2-35":new FieldDefinition("Living Arrangement", 2 ),
        "IN2-36":new FieldDefinition("Publicity Code", 705 ),
        "IN2-37":new FieldDefinition("Protection Indicator", 1 ),
        "IN2-38":new FieldDefinition("Student Indicator", 2 ),
        "IN2-39":new FieldDefinition("Religion", 705 ),
        "IN2-40":new FieldDefinition("Mother's Maiden Name", 250 ),
        "IN2-41":new FieldDefinition("Nationality", 705 ),
        "IN2-42":new FieldDefinition("Ethnic Group", 705 ),
        "IN2-43":new FieldDefinition("Marital Status", 705 ),
        "IN2-44":new FieldDefinition("Insured's Employment Start Date", 8 ),
        "IN2-45":new FieldDefinition("Employment Stop Date", 8 ),
        "IN2-46":new FieldDefinition("Job Title", 20 ),
        "IN2-47":new FieldDefinition("Job Code/Class", 20 ),
        "IN2-48":new FieldDefinition("Job Status", 2 ),
        "IN2-49":new FieldDefinition("Employer Contact Person Name", 250 ),
        "IN2-50":new FieldDefinition("Employer Contact Person Phone Number", 250 ),
        "IN2-51":new FieldDefinition("Employer Contact Reason", 2 ),
        "IN2-52":new FieldDefinition("Insured's Contact Person's Name", 250 ),
        "IN2-53":new FieldDefinition("Insured's Contact Person Phone Number", 250 ),
        "IN2-54":new FieldDefinition("Insured's Contact Person Reason", 2 ),
        "IN2-55":new FieldDefinition("Relationship to the Patient Start Date", 8 ),
        "IN2-56":new FieldDefinition("Relationship to the Patient Stop Date", 8 ),
        "IN2-57":new FieldDefinition("Insurance Co. Contact Reason", 2 ),
        "IN2-58":new FieldDefinition("Insurance Co Contact Phone Number", 250 ),
        "IN2-59":new FieldDefinition("Policy Scope", 2 ),
        "IN2-60":new FieldDefinition("Policy Source", 2 ),
        "IN2-61":new FieldDefinition("Patient Member Number", 250 ),
        "IN2-62":new FieldDefinition("Guarantor's Relationship To Insured", 250 ),
        "IN2-63":new FieldDefinition("Insured's Phone Number - Home", 250 ),
        "IN2-64":new FieldDefinition("Insured's Employer Phone Number", 250 ),
        "IN2-65":new FieldDefinition("Military Handicapped Program", 250 ),
        "IN2-66":new FieldDefinition("Suspend Flag", 1 ),
        "IN2-67":new FieldDefinition("Copay Limit Flag", 1 ),
        "IN2-68":new FieldDefinition("Stoploss Limit Flag", 1 ),
        "IN2-69":new FieldDefinition("Insured Organization Name and ID", 250 ),
        "IN2-70":new FieldDefinition("Insured Employer Organization Name and ID", 250 ),
        "IN2-71":new FieldDefinition("Race", 705 ),
        "IN2-72":new FieldDefinition("CMS Patient_s Relationship to Insured", 705 ),

        //IN3: Insurance Additional Information, Certification
        "IN3":new FieldDefinition("Insurance Additional Information, Certification"),
        "IN3-1":new FieldDefinition("Set ID - IN3 ",4 ),
        "IN3-2":new FieldDefinition("Certification Number ",250 ),
        "IN3-3":new FieldDefinition("Certified By ",250 ),
        "IN3-4":new FieldDefinition("Certification Required ",1 ),
        "IN3-5":new FieldDefinition("Penalty ",23 ),
        "IN3-6":new FieldDefinition("Certification Date/Time ",24 ),
        "IN3-7":new FieldDefinition("Certification Modify Date/Time ",24 ),
        "IN3-8":new FieldDefinition("Operator ",250 ),
        "IN3-9":new FieldDefinition("Certification Begin Date ",8 ),
        "IN3-10":new FieldDefinition("Certification End Date ",8 ),
        "IN3-11":new FieldDefinition("Days ",6 ),
        "IN3-12":new FieldDefinition("Non-Concur Code/Description ",250 ),
        "IN3-13":new FieldDefinition("Non-Concur Effective Date/Time ",24 ),
        "IN3-14":new FieldDefinition("Physician Reviewer ",250 ),
        "IN3-15":new FieldDefinition("Certification Contact ",48 ),
        "IN3-16":new FieldDefinition("Certification Contact Phone Number ",250 ),
        "IN3-17":new FieldDefinition("Appeal Reason ",250 ),
        "IN3-18":new FieldDefinition("Certification Agency ",250 ),
        "IN3-19":new FieldDefinition("Certification Agency Phone Number ",250 ),
        "IN3-20":new FieldDefinition("Pre-Certification Requirement ",40 ),
        "IN3-21":new FieldDefinition("Case Manager ",48 ),
        "IN3-22":new FieldDefinition("Second Opinion Date ",8 ),
        "IN3-23":new FieldDefinition("Second Opinion Status ",1 ),
        "IN3-24":new FieldDefinition("Second Opinion Documentation Received ",1 ),
        "IN3-25":new FieldDefinition("Second Opinion Physician ",250 ),

        //MSH: Message Header
        "MSH" : new FieldDefinition("Message Header"),

        "MSH-1" : new FieldDefinition("Field Separator", 1),
        "MSH-2" : new FieldDefinition("Encoding Characters", 5),
        "MSH-3" : new FieldDefinition("Sending Application", 227),
        "MSH-4" : new FieldDefinition("Sending Facility / Sub-Facility", 227),
        "MSH-4.0" : new FieldDefinition("Facility", 227),
        "MSH-4.1" : new FieldDefinition("Sub-Facility", 227),
        "MSH-5" : new FieldDefinition("Receiving Application", 227),
        "MSH-6" : new FieldDefinition("Receiving Facility", 227),
        "MSH-7" : new FieldDefinition("Date/Time of Message", 24),
        "MSH-8" : new FieldDefinition("Security", 40),
        "MSH-9" : new FieldDefinition("Message Type", 15),
        "MSH-9.0" : new FieldDefinition("Message Type", 15),
        "MSH-9.1" : new FieldDefinition("Trigger Event", 15),
        "MSH-10" : new FieldDefinition("Message Control Id", 199),
        "MSH-11" : new FieldDefinition("Processing Id", 3),
        "MSH-12" : new FieldDefinition("Version Id", 60),
        "MSH-13" : new FieldDefinition("Sequence Number", 15),
        "MSH-14" : new FieldDefinition("Continuation Pointer", 180),
        "MSH-15" : new FieldDefinition("Accept Acknowledgment Type", 2),
        "MSH-16" : new FieldDefinition("Application Acknowledgment Type", 2),
        "MSH-17" : new FieldDefinition("Country Code", 3),
        "MSH-18" : new FieldDefinition("Character Set", 15),
        "MSH-19" : new FieldDefinition("Principal Language Of Message", 250),
        "MSH-20" : new FieldDefinition("Alternate Character Set Handling Scheme", 13),
        "MSH-21" : new FieldDefinition("Message Profile Identifier", 427),
        "MSH-22" : new FieldDefinition("Sending Responsible Organization", 567),
        "MSH-23" : new FieldDefinition("Receiving Responsible Organization", 567),
        "MSH-24" : new FieldDefinition("Sending Network Address", 227),
        "MSH-25" : new FieldDefinition("Receiving Network Address", 227),

     

        //PID: Patient Identification
        "PID": new FieldDefinition("Patient Identification"),

        "PID-1": new FieldDefinition("Set ID - Patient ID", 4),
        "PID-2": new FieldDefinition("Patient ID", 20),
        "PID-3": new FieldDefinition("Patient Identifier List", 250),
        "PID-4": new FieldDefinition("Alternate Patient ID", 20),
        "PID-5": new FieldDefinition("Patient Name", 250),
        "PID-6": new FieldDefinition("Mother's Maiden Name", 250),
        "PID-7": new FieldDefinition("Date/Time of Birth", 24),
        "PID-8": new FieldDefinition("Administrative Sex", 1),
        "PID-9": new FieldDefinition("Patient Alias", 250),
        "PID-10":new FieldDefinition("Race", 705),
        "PID-11":new FieldDefinition("Patient Address", 250),
        "PID-12":new FieldDefinition("County Code", 4),
        "PID-13":new FieldDefinition("Phone Number - Home", 250),
        "PID-14":new FieldDefinition("Phone Number - Business", 250),
        "PID-15":new FieldDefinition("Primary Language", 705),
        "PID-16":new FieldDefinition("Marital Status", 705),
        "PID-17":new FieldDefinition("Religion", 705),
        "PID-18":new FieldDefinition("Patient Account Number", 250),
        "PID-19":new FieldDefinition("SSN Number - Patient", 16),
        "PID-20":new FieldDefinition("Driver's License Number - Patient", 25),
        "PID-21":new FieldDefinition("Mother's Identifier", 250),
        "PID-22":new FieldDefinition("Ethnic Group", 705),
        "PID-23":new FieldDefinition("Birth Place", 250),
        "PID-24":new FieldDefinition("Multiple Birth Indicator", 1),
        "PID-25":new FieldDefinition("Birth Order", 2),
        "PID-26":new FieldDefinition("Citizenship", 705),
        "PID-27":new FieldDefinition("Veterans Military Status", 705),
        "PID-28":new FieldDefinition("Nationality", 705),
        "PID-29":new FieldDefinition("Patient Death Date and Time", 24),
        "PID-30":new FieldDefinition("Patient Death Indicator", 1),
        "PID-31":new FieldDefinition("Identity Unknown Indicator", 1),
        "PID-32":new FieldDefinition("Identity Reliability Code", 20),
        "PID-33":new FieldDefinition("Last Update Date/Time", 24),
        "PID-34":new FieldDefinition("Last Update Facility", 241),
        "PID-35":new FieldDefinition("Species Code", 705),
        "PID-36":new FieldDefinition("Breed Code", 705),
        "PID-37":new FieldDefinition("Strain", 80),
        "PID-38":new FieldDefinition("Production Class Code", 705),
        "PID-39":new FieldDefinition("Tribal Citizenship", 705),

        //PD1: Patient Demographics
        "PD1":new FieldDefinition("Patient Demographics"),
        "PD1-1":new FieldDefinition("Living Dependency",2),
        "PD1-2":new FieldDefinition("Living Arrangement",2),
        "PD1-3":new FieldDefinition("Patient Primary Facility",250),
        "PD1-4":new FieldDefinition("Patient Primary Care Provider Name and ID No.",250),
        "PD1-5":new FieldDefinition("Student Indicator",2),
        "PD1-6":new FieldDefinition("Handicap",2),
        "PD1-7":new FieldDefinition("Living Will Code",2),
        "PD1-8":new FieldDefinition("Organ Donor Code",2),
        "PD1-9":new FieldDefinition("Separate Bill",1),
        "PD1-10":new FieldDefinition("Duplicate Patient",250),
        "PD1-11":new FieldDefinition("Publicity Code",705),
        "PD1-12":new FieldDefinition("Protection Indicator",1),
        "PD1-13":new FieldDefinition("Protection Indicator Effective Date",8),
        "PD1-14":new FieldDefinition("Place of Worship",250),
        "PD1-15":new FieldDefinition("Advance Directive Code",705),
        "PD1-16":new FieldDefinition("Immunization Registry Status",1),
        "PD1-17":new FieldDefinition("Immunization Registry Status Effective Date",8),
        "PD1-18":new FieldDefinition("Publicity Code Effective Date",8),
        "PD1-19":new FieldDefinition("Military Branch",5),
        "PD1-20":new FieldDefinition("Military Rank/Grade",2),
        "PD1-21":new FieldDefinition("Military Status",3),
        "PD1-22":new FieldDefinition("Advance Directive Last Verified Date",8),

        //PV1: Patient Visit
        "PV1":new FieldDefinition("Patient Visit"),
        "PV1-1":new FieldDefinition("Set ID ",4),
        "PV1-2":new FieldDefinition("Patient Class",1),
        "PV1-3":new FieldDefinition("Assigned Patient Location",80),
        "PV1-4":new FieldDefinition("Admission Type",2),
        "PV1-5":new FieldDefinition("Preadmit Number",250),
        "PV1-6":new FieldDefinition("Prior Patient Location",80),
        "PV1-7":new FieldDefinition("Attending Doctor",250),
        "PV1-8":new FieldDefinition("Referring Doctor",250),
        "PV1-9":new FieldDefinition("Consulting Doctor",250),
        "PV1-10":new FieldDefinition("Hospital Service",3),
        "PV1-11":new FieldDefinition("Temporary Location",80),
        "PV1-12":new FieldDefinition("Preadmit Test Indicator",2),
        "PV1-13":new FieldDefinition("Re-admission Indicator",2),
        "PV1-14":new FieldDefinition("Admit Source",6),
        "PV1-15":new FieldDefinition("Ambulatory Status",2),
        "PV1-16":new FieldDefinition("VIP Indicator",2),
        "PV1-17":new FieldDefinition("Admitting Doctor",250),
        "PV1-18":new FieldDefinition("Patient Type",2),
        "PV1-19":new FieldDefinition("Visit Number",250),
        "PV1-20":new FieldDefinition("Financial Class",50),
        "PV1-21":new FieldDefinition("Charge Price Indicator",2),
        "PV1-22":new FieldDefinition("Courtesy Code",2),
        "PV1-23":new FieldDefinition("Credit Rating",2),
        "PV1-24":new FieldDefinition("Contract Code",2),
        "PV1-25":new FieldDefinition("Contract Effective Date",8),
        "PV1-26":new FieldDefinition("Contract Amount",12),
        "PV1-27":new FieldDefinition("Contract Period",3),
        "PV1-28":new FieldDefinition("Interest Code",2),
        "PV1-29":new FieldDefinition("Transfer to Bad Debt Code",4),
        "PV1-30":new FieldDefinition("Transfer to Bad Debt Date",8),
        "PV1-31":new FieldDefinition("Bad Debt Agency Code",10),
        "PV1-32":new FieldDefinition("Bad Debt Transfer Amount",12),
        "PV1-33":new FieldDefinition("Bad Debt Recovery Amount",12),
        "PV1-34":new FieldDefinition("Delete Account Indicator",1),
        "PV1-35":new FieldDefinition("Delete Account Date",8),
        "PV1-36":new FieldDefinition("Discharge Disposition",3),
        "PV1-37":new FieldDefinition("Discharged to Location",47),
        "PV1-38":new FieldDefinition("Diet Type",705),
        "PV1-39":new FieldDefinition("Servicing Facility",2),
        "PV1-40":new FieldDefinition("Bed Status",1),
        "PV1-41":new FieldDefinition("Account Status",2),
        "PV1-42":new FieldDefinition("Pending Location",80),
        "PV1-43":new FieldDefinition("Prior Temporary Location",80),
        "PV1-44":new FieldDefinition("Admit Date/Time",24),
        "PV1-45":new FieldDefinition("Discharge Date/Time",24),
        "PV1-46":new FieldDefinition("Current Patient Balance",12),
        "PV1-47":new FieldDefinition("Total Charges",12),
        "PV1-48":new FieldDefinition("Total Adjustments",12),
        "PV1-49":new FieldDefinition("Total Payments",12),
        "PV1-50":new FieldDefinition("Alternate Visit ID",250),
        "PV1-51":new FieldDefinition("Visit Indicator",1),
        "PV1-52":new FieldDefinition("Other Healthcare Provider",250),

        //PV1:  Patient Visit - Additional Information
        "PV2":new FieldDefinition(" Patient Visit - Additional Information"),

        "PV2-1":new FieldDefinition("Prior Pending Location",80),
        "PV2-2":new FieldDefinition("Accommodation Code",705),
        "PV2-3":new FieldDefinition("Admit Reason",705),
        "PV2-4":new FieldDefinition("Transfer Reason",705),
        "PV2-5":new FieldDefinition("Patient Valuables",25),
        "PV2-6":new FieldDefinition("Patient Valuables Location",25),
        "PV2-7":new FieldDefinition("Visit User Code",2	),
        "PV2-8":new FieldDefinition("Expected Admit Date/Time",24),
        "PV2-9":new FieldDefinition("Expected Discharge Date/Time",24),
        "PV2-10":new FieldDefinition("Estimated Length of Inpatient Stay",3),
        "PV2-11":new FieldDefinition("Actual Length of Inpatient Stay",3),
        "PV2-12":new FieldDefinition("Visit Description",50),
        "PV2-13":new FieldDefinition("Referral Source Code",250),
        "PV2-14":new FieldDefinition("Previous Service Date",8),
        "PV2-15":new FieldDefinition("Employment Illness Related Indicator",1),
        "PV2-16":new FieldDefinition("Purge Status Code",1),
        "PV2-17":new FieldDefinition("Purge Status Date",8),
        "PV2-18":new FieldDefinition("Special Program Code",2),
        "PV2-19":new FieldDefinition("Retention Indicator",1),
        "PV2-20":new FieldDefinition("Expected Number of Insurance Plans",1),
        "PV2-21":new FieldDefinition("Visit Publicity Code",1),
        "PV2-22":new FieldDefinition("Visit Protection Indicator",1),
        "PV2-23":new FieldDefinition("Clinic Organization Name",250),
        "PV2-24":new FieldDefinition("Patient Status Code",2),
        "PV2-25":new FieldDefinition("Visit Priority Code",1),
        "PV2-26":new FieldDefinition("Previous Treatment Date",8),
        "PV2-27":new FieldDefinition("Expected Discharge Disposition",2),
        "PV2-28":new FieldDefinition("Signature on File Date",8),
        "PV2-29":new FieldDefinition("First Similar Illness Date",8),
        "PV2-30":new FieldDefinition("Patient Charge Adjustment Code",705),
        "PV2-31":new FieldDefinition("Recurring Service Code",2),
        "PV2-32":new FieldDefinition("Billing Media Code",1),
        "PV2-33":new FieldDefinition("Expected Surgery Date and Time",24),
        "PV2-34":new FieldDefinition("Military Partnership Code",1),
        "PV2-35":new FieldDefinition("Military Non-Availability Code",1),
        "PV2-36":new FieldDefinition("Newborn Baby Indicator",1),
        "PV2-37":new FieldDefinition("Baby Detained Indicator",1),
        "PV2-38":new FieldDefinition("Mode of Arrival Code",705),
        "PV2-39":new FieldDefinition("Recreational Drug Use Code",705),
        "PV2-40":new FieldDefinition("Admission Level of Care Code",705),
        "PV2-41":new FieldDefinition("Precaution Code",705),
        "PV2-42":new FieldDefinition("Patient Condition Code",705),
        "PV2-43":new FieldDefinition("Living Will Code",2),
        "PV2-44":new FieldDefinition("Organ Donor Code",2),
        "PV2-45":new FieldDefinition("Advance Directive Code",705),
        "PV2-46":new FieldDefinition("Patient Status Effective Date",8),
        "PV2-47":new FieldDefinition("Expected LOA Return Date/Time",24),
        "PV2-48":new FieldDefinition("Expected Pre-admission Testing Date/Time",24),
        "PV2-49":new FieldDefinition("Notify Clergy Code",20),
        "PV2-50":new FieldDefinition("Advance Directive Last Verified Date",8),

        //NK1: Next Of Kin
        "NK1":new FieldDefinition("Next Of Kin"),

        "NK1-1":new FieldDefinition("Set ID - NK1",4),
        "NK1-2":new FieldDefinition("NK Name",250),
        "NK1-3":new FieldDefinition("Relationship",705),
        "NK1-4":new FieldDefinition("Address",250),
        "NK1-5":new FieldDefinition("Phone Number",250),
        "NK1-6":new FieldDefinition("Business Phone Number",250),
        "NK1-7":new FieldDefinition("Contact Role",705),
        "NK1-8":new FieldDefinition("Start Date",8),
        "NK1-9":new FieldDefinition("End Date",8),
        "NK1-10":new FieldDefinition(" Next of Kin / Associated Parties Job Title",60),
        "NK1-11":new FieldDefinition(" Next of Kin / Associated Parties Job Code/Class",20),
        "NK1-12":new FieldDefinition(" Next of Kin / Associated Parties Employee Number",250),
        "NK1-13":new FieldDefinition(" Organization Name - NK1",250),
        "NK1-14":new FieldDefinition(" Marital Status",705),
        "NK1-15":new FieldDefinition(" Administrative Sex",1),
        "NK1-16":new FieldDefinition(" Date/Time of Birth",24),
        "NK1-17":new FieldDefinition(" Living Dependency",2),
        "NK1-18":new FieldDefinition(" Ambulatory Status",2),
        "NK1-19":new FieldDefinition(" Citizenship",705),
        "NK1-20":new FieldDefinition(" Primary Language",705),
        "NK1-21":new FieldDefinition(" Living Arrangement",2),
        "NK1-22":new FieldDefinition(" Publicity Code",705),
        "NK1-23":new FieldDefinition(" Protection Indicator",1),
        "NK1-24":new FieldDefinition(" Student Indicator",2),
        "NK1-25":new FieldDefinition(" Religion",705),
        "NK1-26":new FieldDefinition(" Mother's Maiden Name",250),
        "NK1-27":new FieldDefinition(" Nationality",705),
        "NK1-28":new FieldDefinition(" Ethnic Group",705),
        "NK1-29":new FieldDefinition(" Contact Reason",705),
        "NK1-30":new FieldDefinition(" Contact Person's Name",250),
        "NK1-31":new FieldDefinition(" Contact Person's Telephone Number",250),
        "NK1-32":new FieldDefinition(" Contact Person's Address",250),
        "NK1-33":new FieldDefinition(" Next of Kin/Associated Party's Identifiers",250),
        "NK1-34":new FieldDefinition(" Job Status",2),
        "NK1-35":new FieldDefinition(" Race",705),
        "NK1-36":new FieldDefinition(" Handicap",2),
        "NK1-37":new FieldDefinition(" Contact Person Social Security Number",16),
        "NK1-38":new FieldDefinition(" Next of Kin Birth Place",250),
        "NK1-39":new FieldDefinition(" VIP Indicator",2),


        //PR1: Procedures
        "PR1":new FieldDefinition("Procedures"),

        "PR1-1":new FieldDefinition("Set ID - PR1 ", 4 ),
        "PR1-2":new FieldDefinition("Procedure Coding Method ", 3 ),
        "PR1-3":new FieldDefinition("Procedure Code ", 705 ),
        "PR1-4":new FieldDefinition("Procedure Description ", 40 ),
        "PR1-5":new FieldDefinition("Procedure Date/Time ", 24 ),
        "PR1-6":new FieldDefinition("Procedure Functional Type ", 2 ),
        "PR1-7":new FieldDefinition("Procedure Minutes ", 4 ),
        "PR1-8":new FieldDefinition("Anesthesiologist ", 250 ),
        "PR1-9":new FieldDefinition("Anesthesia Code ", 2 ),
        "PR1-10":new FieldDefinition("Anesthesia Minutes ", 4 ),
        "PR1-11":new FieldDefinition("Surgeon ", 250 ),
        "PR1-12":new FieldDefinition("Procedure Practitioner ", 250 ),
        "PR1-13":new FieldDefinition("Consent Code ", 250 ),
        "PR1-14":new FieldDefinition("Procedure Priority ", 2 ),
        "PR1-15":new FieldDefinition("Associated Diagnosis Code ", 250 ),
        "PR1-16":new FieldDefinition("Procedure Code Modifier ", 705 ),
        "PR1-17":new FieldDefinition("Procedure DRG Type ", 20 ),
        "PR1-18":new FieldDefinition("Tissue Type Code ", 250 ),
        "PR1-19":new FieldDefinition("Procedure Identifier ", 427 ),
        "PR1-20":new FieldDefinition("Procedure Action Code ", 1 ),
        "PR1-21":new FieldDefinition("DRG Procedure Determination Status ", 20 ),
        "PR1-22":new FieldDefinition("DRG Procedure Relevance ", 20 ),

        //UAC: User Authentication Credential
        "UAC-1":new FieldDefinition("User Authentication Credential Type Code",705),
        "UAC-2":new FieldDefinition("User Authentication Credential Type Code",65536),
        
        //UB1: UB82
        "UB1":new FieldDefinition("UB82"),

        "UB1-1":new FieldDefinition(" Set ID - UB1 ",4 ),
        "UB1-2":new FieldDefinition(" Blood Deductible ",1 ),
        "UB1-3":new FieldDefinition(" Blood Furnished-Pints Of ",2 ),
        "UB1-4":new FieldDefinition(" Blood Replaced-Pints ",2 ),
        "UB1-5":new FieldDefinition(" Blood Not Replaced-Pints ",2 ),
        "UB1-6":new FieldDefinition(" Co-Insurance Days ",2 ),
        "UB1-7":new FieldDefinition(" Condition Code ",14 ),
        "UB1-8":new FieldDefinition(" Covered Days - ",3 ),
        "UB1-9":new FieldDefinition(" Non Covered Days - ",3 ),
        "UB1-10":new FieldDefinition("Value Amount and Code ",41 ),
        "UB1-11":new FieldDefinition("Number Of Grace Days ",2 ),
        "UB1-12":new FieldDefinition("Special Program Indicator ",250 ),
        "UB1-13":new FieldDefinition("PSRO/UR Approval Indicator ",250 ),
        "UB1-14":new FieldDefinition("PSRO/UR Approved Stay-Fm ",8 ),
        "UB1-15":new FieldDefinition("PSRO/UR Approved Stay-To ",8 ),
        "UB1-16":new FieldDefinition("Occurrence ",259 ),
        "UB1-17":new FieldDefinition("Occurrence Span ",250 ),
        "UB1-18":new FieldDefinition("Occur Span Start Date ",8 ),
        "UB1-19":new FieldDefinition("Occur Span End Date ",8 ),
        "UB1-20":new FieldDefinition("UB-82 Locator 2 ",30 ),
        "UB1-21":new FieldDefinition("UB-82 Locator 9 ",7 ),
        "UB1-22":new FieldDefinition("UB-82 Locator 27 ",8 ),
        "UB1-23":new FieldDefinition("UB-82 Locator 45 ",17 ),

        //UB2: UB92 Data
        "UB2":new FieldDefinition("UB92 Data",4 ),

        "UB2-1":new FieldDefinition(" Set ID - UB2 ",4 ),
        "UB2-2":new FieldDefinition(" Co-Insurance Days ",3 ),
        "UB2-3":new FieldDefinition(" Condition Code ",2 ),
        "UB2-4":new FieldDefinition(" Covered Days ",3 ),
        "UB2-5":new FieldDefinition(" Non-Covered Days ",4 ),
        "UB2-6":new FieldDefinition(" Value Amount and Code ",41 ),
        "UB2-7":new FieldDefinition(" Occurrence Code and Date ",259 ),
        "UB2-8":new FieldDefinition(" Occurrence Span Code/Dates",268 ),
        "UB2-9":new FieldDefinition(" UB92 Locator 2 ",29 ),
        "UB2-10":new FieldDefinition("UB92 Locator 11 ",12 ),
        "UB2-11":new FieldDefinition("UB92 Locator 31 ",5 ),
        "UB2-12":new FieldDefinition("Document Control Number ",23 ),
        "UB2-13":new FieldDefinition("UB92 Locator 49 ",4 ),
        "UB2-14":new FieldDefinition("UB92 Locator 56 ",14 ),
        "UB2-15":new FieldDefinition("UB92 Locator 57 ",27 ),
        "UB2-16":new FieldDefinition("UB92 Locator 78 ",2 ),
        "UB2-17":new FieldDefinition("Special Visit Count ",3 ),
    }
    
}